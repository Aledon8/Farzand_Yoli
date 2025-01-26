import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ForumPage from "./Pages/forum/forum.js";
import HomePage from "./Pages/home/home.js";
import NotFoundPage from "./Pages/notFound/notFound.js";
import AccountPage from "./Pages/account/account.js";
import VisitPage from "./Pages/visit/visit.js";
import Navbar from "./Components/Navbar/Navbar.js";
import "./Main.scss";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={isAuthenticated ? <HomePage /> : <VisitPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
