import { BrowserRouter, Routes, Route } from "react-router-dom";
import TDListItem from  "../pages/TDListItem";
import TDmain from "../components/TDmain";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TDmain/>}/>
        <Route path="/todo/:id" element={<TDListItem/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router