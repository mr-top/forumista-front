import { BrowserRouter, Routes, Route } from "react-router-dom"

import ToggleTheme from "./components/ToggleTheme"
import NotFound from "./components/NotFound"
import Navbar from "./components/Navbar"
import Home from './components/Home'
import Posts from "./components/Posts"
import ProfileRouter from "./components/ProfileRouter"

function App() {

  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <div className="flex-initial bg-base-100 min-h-[5rem]">
          <Navbar/>
        </div>
        <div className="flex flex-col bg-neutral flex-auto items-center">
          <Routes>
            <Route path='/home' element={<Home />}>
              <Route path='/home/posts' element={<Posts/>}/>
              <Route path='/home/profile' element={<ProfileRouter/>}/>
              <Route path='/home/profile/:id' element={<ProfileRouter/>}/>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="flex-initial bg-base-100 min-h-[5rem]">
        <ToggleTheme/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
