import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home'
import { Routes, Route, Navigate } from "react-router-dom";
import UsersList from "./components/Home/Users/UsersList/UsersList";
import AddUserForm from "./components/Home/Users/AddUserForm/AddUserForm";

import "./App.scss";
const App = (props) => {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/usersList" element={<UsersList />} />
          <Route path="/addUser" element={<AddUserForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
