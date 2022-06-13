import { useState, useEffect }  from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'


function Contact() {
    const [message, setMessage] = useState('')
    const [landlord, setLandlord] = useState(null)
     // eslint-disable-next-line
    const [searchParams, setSearchParams] = useSearchParams()

    const params = useParams()

    useEffect(()=> {
        const getLandlord = async () => {
            const docRef = doc(db, 'users', params.landloardId)
            const docSnap = await getDoc(docRef)

            if(docSnap.exists()){
                setLandlord(docSnap.data())
                
            }else{
                toast.error('Could not get Landlord data')
            }
        }
        getLandlord()

    }, [params.landlordId])

    const onChange = e => {
        setMessage(e.target.value)
    }

    return (
    <div className='pageContainer'>
        <header>
            <p className='pageHeader'>
                Contact Landlord
            </p>
        </header>
        {landlord !== null && (
            <main>
                <div className='contactLandlord'>
                    <p className='contactLandlord'>
                        Contact {landlord?.name}
                    </p>
                </div>
                <form className='messageForm'>
                    <div className='messageDiv'>
                        <label className='messageLabel' htmlFor='message'>
                            Message
                        </label>
                        <textarea className='textarea' name='message' id='message' value={message } onChange={onChange}>
                        </textarea>
                        <a href={`mailto:${landlord.email}?Subject=${searchParams.get('listingName')}&body=${message}`}>
                            <button type='button' className='primaryButton'>Send Message</button>

                        </a>
                    </div>
                </form>
            </main>
        )}
    </div>

    )
}

export default Contact