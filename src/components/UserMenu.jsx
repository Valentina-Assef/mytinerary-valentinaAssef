import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';
import { user_logout } from '../store/actions/userActions';
import Swal from 'sweetalert2';

export default function UserMenu() {
  const [openUserMenu, setOpenUserMenu] = useState(false)
  const user = useSelector(store => store.userReducer.user)
  const default_photo = "/user-icon.png"

  useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest('#user-menu') && !e.target.closest('#user-menu-button')) {
        setOpenUserMenu(false);
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const closeMenuAndRedirect = (url) => {
    setOpenUserMenu(false)
    window.location.href = url
  }

  const dispatch = useDispatch()

  const handleSignOut = async (e) => {
    e.preventDefault()
    try {
      const result = await Swal.fire({
        title: 'Sign Out',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      })

      if (result.isConfirmed) {
        dispatch(user_logout())
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        Swal.fire(
          'Goodbye'
        )
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <button onClick={() => setOpenUserMenu(!openUserMenu)} type="button" id="user-menu-button" className="border-black hover:text-red-500 md:ml-5 md:my-0 my-5 relative flex rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-500" aria-expanded="false" aria-haspopup="true">
        <img className='h-12 w-12 p-1 cursor-pointer rounded-full' src={user ? user.photo : default_photo} alt='User Icon'/>
      </button>
      {!user && (
        <ul id="user-menu" className={`absolute bg-white p-1 border border-gray-300 rounded-lg shadow-lg text-center ${openUserMenu ? "top-20 right-2  py-3 opacity-100" : "top-[-490px] opacity-0"}`}>
          <li className='mx-1'>
            <p className="mb-3">Create an account</p>
            <LinkRouter onClick={() => closeMenuAndRedirect('/signup')} className="bg-red-500 font-bold text-white rounded-full py-2 px-3 md:px-10 my-3 md:mx-10" to="/signup">Sign Up</LinkRouter>
          </li>
          <li className='mx-1 my-5'>
            <p className="mb-3">Do you have an account?</p>
            <LinkRouter onClick={() => closeMenuAndRedirect('/signin')} className="border-2 border-red-500 rounded-full py-2 px-3 md:px-10 my-3 md:mx-10" to="/signin">Sign In</LinkRouter>
          </li>
        </ul>
      )}
      {user && (
        <button onClick={handleSignOut} className='ml-4 mt-1'>
          <ion-icon name="log-out-outline" style={{ fontSize: "2.5rem", color: "#fff", position: "relative", zIndex: "-10"}}></ion-icon>
        </button>
      )}
    </>
  )
}