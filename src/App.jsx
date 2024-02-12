import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import LogIn from './components/LogIn'
import SignIn from './components/SignIn.jsx'
import News from './pages/News.jsx'
import Detail from './pages/Detail.jsx'
import About from './pages/About.jsx'
import ThisWork from './pages/ThisWork.jsx'
import Contact from './pages/Contact.jsx'
import Balance from './pages/Balance.jsx'
import Information from './pages/Information.jsx'
const App = () => {
   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  element={<MainLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/news" element={<News/>}/>
        <Route path="/users/:id" element={<Detail/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/work" element={<ThisWork/>} />
        <Route path="/contacts" element={<Contact/>} />
        <Route path="/balance" element={<Balance/>} />
        <Route path="/information" element={<Information/>} />
      </Route>
    )
   )

   

  return (
    <RouterProvider router={router} />
  )
}

export default App