import { useContext, useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { AiFillGoogleCircle, AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { weddingContextProvider } from '../../Context/ContextProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { signupuser } = useContext(weddingContextProvider)
    const [showbutton, setShowBtn] = useState(true)
    const style = {
        background: `url('loginbackgroundimg.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    const showPassword = (e) => {
        const passwordField = document.querySelector('#password')
        if (passwordField.type === 'password') {
            passwordField.type = 'text'
            setShowBtn(false)
        } else {
            passwordField.type = 'password'
            setShowBtn(true)
        }
    }
    const formSubmit = e => {
        let error = [];
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
        const username = e.target.email.username;

        const passwordLength = /.{6,}/;
        const specialCharacter = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;
        const uppercase = /[A-Z]/;
        if (!passwordLength.test(password)) {
            error = [...error,'Password should be at least 6 characters long']
        }

        if (!specialCharacter.test(password)) {
            error = [...error,'Password should contain at least one special character']
        }

        if (!uppercase.test(password)) {
            error = [...error,'Password should contain at least one uppercase letter']
        }
        if (error.length>0) {
           const msg = error[0]
           Swal.fire(
            'opps!!',
            `${msg}`,
            'error'
          )
            
        }else{
            signupuser(password,email,username)
        }
    };

    return (
        <div className='py-14 box-border' style={style}>
            <div className='container mx-auto flex justify-center items-center'>
                <div >

                    <h3 className='text-center text-white mb-10 italic text-5xl'>wellcome</h3>
                    <div className='text-center bg-black bg-opacity-70 rounded shadow-2xl  pb-20'>

                        <form onSubmit={formSubmit}>
                            <h2 className='text-center text-white italic text-xl py-8'>Sign uo</h2>
                            <p id='error'></p>
                            <label>
                                <input required type="text" name='username' placeholder="username" className="input input-bordered outline-white text-xl text-white bg-black bg-opacity-60 my-2 input-secondary w-full max-w-xs" />
                            </label><br />
                            <input required type="email" name='email' placeholder="email" className="input input-bordered outline-white text-xl text-white bg-black bg-opacity-60 my-2 input-secondary w-full max-w-xs" />
                            <label className='relative'>
                                <input required id='password' name='password' type="password" placeholder="password" className="input input-bordered text-xl outline-white text-white bg-black bg-opacity-60 my-2 input-secondary w-full max-w-xs" /><span onClick={showPassword} className='text-2xl cursor-pointer active:scale-90 text-white absolute right-2 top-[50%] -translate-y-[50%]'>{showbutton ? <HiEyeOff></HiEyeOff> : <HiEye></HiEye>}</span>
                            </label>
                            <button className="block mx-auto px-32 py-2 mt-10 bg-white bg-opacity-30 text-black font-extrabold text-lg rounded-lg">sign up</button>
                        </form>

                        <p className='text-white font-normal text-base'>allready have an account ? <Link to={'/login'} className='text-blue-600 cursor-pointer text-lg underline'>login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
