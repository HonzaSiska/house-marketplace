import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase.config'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper';
import { Thumbs } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import Spinner from './Spinner'

function MainSlider() {
    const [loading, setLoading] = useState(true)
    const [listings, setListings] = useState(null)
  
    const navigate = useNavigate()
  
    useEffect(() => {
      const fetchListings = async () => {
        const listingsRef = collection(db, 'listings')
        const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
        const querySnap = await getDocs(q)
  
        let listings = []
  
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          })
        })
  
        setListings(listings)
        setLoading(false)
        console.log('listings', listings)
      }
  
      fetchListings()
    }, [])
  
    if (loading) {
      return <Spinner />
    }
  
    if (listings.length === 0) {
      return <></>
    }
  
    return (
      listings && (
        <>
          <p className='exploreHeading'>Recommended</p>
  
          <Swiper // install Swiper modules
        modules={[EffectFade,Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        effect="fade">
            {listings.map(({ data, id }) => (
              <SwiperSlide
                key={id}
                onClick={() => navigate(`/category/${data.type}/${id}`)}
              >
                <div
                  style={{
                    background: `url(${data.imgUrls[0]}) center no-repeat`,
                    backgroundSize: 'cover',
                    minHeight: '400px'
                  }}
                  className='swiperSlideDiv'
                >
                  <p className='swiperSlideText'>{data.name}</p>
                  <p className='swiperSlidePrice'>
                    ${data.discountedPrice ?? data.regularPrice}{' '}
                    {data.type === 'rent' && '/ month'}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )
    )
  }
  
  export default MainSlider