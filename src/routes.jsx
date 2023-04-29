import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { BookDetails } from "./pages/bookDetails";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/details/:id" element={<BookDetails />} />
        </Routes>
    );
};

export default AppRoute;
