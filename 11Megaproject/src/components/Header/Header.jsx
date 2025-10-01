import React from 'react'
import {Container , Logo , LogoutBtn} from '../Index'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name: "Home",
      slug:  "/",
      active: true
    },{
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name:"Signup",
      slug:"/signup",
      active: !authStatus
    },
    {
      name:"All Post",
      slug:"/all-post",
      active: authStatus
    },
    {
      name:"Add Post",
      slug:"/add-post",
      active: authStatus
    }
  ]
    return (
      <header className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white p-6 shadow-lg">
        <Container>
        <div className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
              item.active ?(
                <li key={item.name}>
                  <button
                  onClick={() => navigate(item.slug)} 
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-800 rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul> 
        </div>
          </Container>
      </header>
  )
}

export default Header
