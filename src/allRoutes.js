import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderDetailsPage from "./Pages/OrderDetailsPage";
import OrderLisPage from "./Pages/OrderLisPage"


const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<OrderLisPage />} />
                <Route exact path="orderdetail" element={<OrderDetailsPage />} />
            </Routes>
        </Router>
    )
}

export default AllRoutes