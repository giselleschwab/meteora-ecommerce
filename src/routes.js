import Homepage from "pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;