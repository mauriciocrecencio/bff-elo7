import { Routes, Route } from "react-router-dom"
import { WorkWithUs } from "./pages/WorkWithUs"

function App() {
  return (
    <>
    <Routes>
       <Route path="/work-with-us" element={<WorkWithUs />} />
    </Routes>
 </>

  )
}

export default App
