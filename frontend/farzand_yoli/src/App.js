import { Routes, Route, Link } from 'react-router-dom';

import ForumPage from './Pages/forum/forum.js';
import HomePage from './Pages/home/home.js';
import NotFoundPage from './Pages/notFound/notFound.js';
import AccountPage from './Pages/account/account.js';
import { Navbar } from './Components/Navbar/Navbar.js';
import "./Main.scss";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Navbar />} >
            <Route index element={<HomePage />} />
            <Route path="forum" element={<ForumPage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
