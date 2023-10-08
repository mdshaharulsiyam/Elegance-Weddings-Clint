import { useContext, useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { AiFillGoogleCircle,AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { weddingContextProvider } from '../../Context/ContextProvider';

const Login = () => {
  const {signinWithGoogle}=useContext(weddingContextProvider)
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
    e.preventDefault()
    const password = e.target.password.value
    const email = e.target.email.value
  }
  return (
    <div className='py-14 box-border' style={style}>
      <div className='container mx-auto flex justify-center items-center'>
        <div >

          <h3 className='text-center text-white mb-10 italic text-5xl'>wellcome</h3>
          <div className='text-center bg-black bg-opacity-70 rounded shadow-2xl  pb-20'>

            <form onSubmit={formSubmit}>
              <h2 className='text-center text-white italic text-xl py-8'>login</h2>
              <input type="email" name='email' placeholder="email" className="input input-bordered outline-white text-xl text-white bg-black bg-opacity-60 my-2 input-secondary w-full max-w-xs" />
              <label className='relative'>
                <input id='password' name='password' type="password" placeholder="password" className="input input-bordered text-xl outline-white text-white bg-black bg-opacity-60 my-2 input-secondary w-full max-w-xs" /><span onClick={showPassword} className='text-2xl cursor-pointer active:scale-90 text-white absolute right-2 top-[50%] -translate-y-[50%]'>{showbutton ? <HiEyeOff></HiEyeOff> : <HiEye></HiEye>}</span>
              </label>
              <button className="block mx-auto px-32 py-2 mt-10 bg-white bg-opacity-30 text-black font-extrabold text-lg rounded-lg">login</button>
              <p className='text-white '>or</p>
            </form>
            <button onClick={signinWithGoogle} className='flex font-extrabold gap-1 justify-center items-center mx-auto px-16 py-2 my-2 bg-white bg-opacity-30 text-black  text-lg rounded-lg'><AiFillGoogleCircle></AiFillGoogleCircle>login wirh Google</button>
            <button className='flex font-extrabold gap-1 justify-center items-center mx-auto px-16 py-2 my-2 bg-white bg-opacity-30 text-black  text-lg rounded-lg'><AiFillGithub></AiFillGithub>login wirh Github</button>
            <p className='text-white font-normal text-base'>don't hava an account ? <Link to={'/signup'} className='text-blue-600 cursor-pointer text-lg underline'>sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
