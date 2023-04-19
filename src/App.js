import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Main/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import UsersList from "./components/Main/Users/UsersList/UsersList";
import AddUserForm from "./components/Main/Users/AddUserForm/AddUserForm";

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
      {/* <Main>
        <Routes>
          <Route path="/usersList" element={<UsersList />} />
          <Route path="/addUserForm" element={<AddUserForm />} />
        </Routes>
      </Main> */}
      {/* <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main/*" element={<Main />} />
        <Route path="/usersList" element={<UsersList />} />
        <Route path="/addUserForm" element={<AddUserForm />} />
      </Routes> */}
      <Footer />
    </div>
  );
};

export default App;
