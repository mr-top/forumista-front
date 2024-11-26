import { BrowserRouter, Routes, Route } from "react-router-dom"

import ToggleTheme from "./components/ToggleTheme"
import NotFound from "./components/NotFound"

function App() {

  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <div className="flex-initial bg-base-100 min-h-[5rem]">
          <ToggleTheme/>
        </div>
        <div className="flex flex-col bg-neutral flex-auto items-center">
          <Routes>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="flex-initial bg-base-100 min-h-[5rem]">

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
