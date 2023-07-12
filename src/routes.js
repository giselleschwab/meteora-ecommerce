import { SearchProvider } from "SearchContext/SearchContext";
import Homepage from "pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<SearchProvider><Homepage /></SearchProvider>}> </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;