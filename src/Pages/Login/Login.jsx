import { HiEye,HiEyeOff } from 'react-icons/hi';

const Login = () => {
  const style = {
    background : `url('loginbackgroundimg.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  const showPassword =()=>{

    const passwordfiled = document.querySelector('#password')
    console.log(passwordfiled)
  }
  return (
    <div className='py-14 box-border' style={style}>
      <div className='container mx-auto flex justify-center items-center'>
      <div >
        <h3 className='text-center text-white mb-10 italic text-5xl'>wellcome</h3>

        <form className='text-center bg-black bg-opacity-70 rounded shadow-2xl  pb-20'>
        <h2 className='text-center text-white italic text-xl py-8'>login</h2> 
        <input type="email" placeholder="email" className="input input-bordered outline-white text-white bg-black bg-opacity-60 my-2 input-secondary w-full max-w-xs" />
        <label className='relative'>
        <input id='password' type="password" placeholder="password" className="input input-bordered outline-white text-white bg-black bg-opacity-60 my-2 input-secondary w-full max-w-xs" /><span onClick={showPassword} className='text-2xl cursor-pointer active:scale-90 text-white absolute right-2 top-[50%] -translate-y-[50%]'><HiEyeOff></HiEyeOff></span>
        </label>
        <button className="block mx-auto px-16 py-2 mt-10 bg-white bg-opacity-30 text-black font-extrabold text-lg rounded-lg">login</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Login
