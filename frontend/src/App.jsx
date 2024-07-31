

import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Browse from './components/Browse'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Profile from './components/Profile'
import Navbar from './components/shared/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/jobs',
    element: <Jobs/>
  },
  {
    path: '/browse',
    element: <Browse/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },

])
function App() {

  return (
    <>
      {/* <h1 className='text-red-500'> Lets Build Job Portal</h1> */}
      <RouterProvider router = {appRouter} />
      {/* <Navbar/> */}
    </>
  )
}

export default App
