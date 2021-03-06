import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth  from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
    const [isLoggiedIn, setIsLoggedIn] = useState(true)
    return (
        <BrowserRouter>
            <Routes>
                {isLoggiedIn ? (
                    <Route exact path="/" element={<Home />} />
                ) : (
                    <Route exact path="/" element={<Auth />} />
                )}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
