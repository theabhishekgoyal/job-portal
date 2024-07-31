

import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
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
