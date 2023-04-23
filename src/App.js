import React, { Suspense } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import ReactLoading from "react-loading";
import "./App.scss";

const Home = React.lazy(() => import("./components/Home/Home"));
const UsersList = React.lazy(() =>
  import("./components/Home/Users/UsersList/UsersList")
);
const User = React.lazy(() =>
  import("./components/Home/Users/UsersList/User/User")
);
const AddUserForm = React.lazy(() =>
  import("./components/Home/Users/AddUserForm/AddUserForm")
);

const loadingSpinner = (
  <ReactLoading
    className="loading-spinner"
    type="spin"
    color="#333"
    height={"7%"}
    width={"7%"}
  />
);

const App = (props) => {
  return (
    <div className="app">
      <Suspense fallback={loadingSpinner}>
        <Header />
        <main data-testid="main">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={loadingSpinner}>
                  <Navigate to="home" />
                </Suspense>
              }
            />
            <Route
              path="/home"
              element={
                <Suspense fallback={loadingSpinner}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/usersList"
              element={
                <Suspense fallback={loadingSpinner}>
                  <UsersList />
                </Suspense>
              }
            />
            <Route
              path="/addUser"
              element={
                <Suspense fallback={loadingSpinner}>
                  <AddUserForm />
                </Suspense>
              }
            >
              <Route
                path="/addUser/:userId"
                element={
                  <Suspense fallback={loadingSpinner}>
                    <User />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
