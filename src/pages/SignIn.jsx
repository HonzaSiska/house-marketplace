import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import OAuth from '../Components/OAuth'


function SignIn() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData

    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))

        // THIS ALSO SEEMS TO TO WORK 

        // setFormData({
        //     ...formData,
        //     [e.target.id]: e.target.value,
        // })
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const auth = getAuth()

            const userCredential = await signInWithEmailAndPassword(auth, email, password)

            if (userCredential.user) navigate(`/`)

        } catch (error) {
            toast.error('Bad user credentials')

        }


    }


    return (
        <>
            <div className='pageContainer'>
                <header>
                    <p className='pageHeader'>Welcome Back!</p>
                </header>
                 <OAuth/>
                <form onSubmit={onSubmit}>
                    <input type='email' id='email' className='emailInput' placeholder='some@email.com' value={email} onChange={onChange} />
                    <div className='passwordInputDiv'>
                        <input type={showPassword ? 'text' : 'password'} id='password' className='passwordInput' value={password} onChange={onChange} placeholder='password' />
                        <img src={visibilityIcon} alt='show password' className='showPassword' onClick={() => setShowPassword((prevState) => !prevState)} />
                    </div>
                    <Link to='/forgot-password' className='forgotPasswordLink'>
                        Forgot Password
                    </Link>


                    <div className='signInBar'>
                        <p className='signInText'>Sign In</p>
                        <button className='signInButton'>
                            <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
                        </button>
                    </div>

                </form>
                <Link to='/signup' className=''>
                    Sign Up Instead
                </Link>

               
            </div>
        </>
    )
}

export default SignIn