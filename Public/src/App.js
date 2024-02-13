import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import Home from "./components/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Careers from "./components/Careers";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import UserContext from "./utils/userContext";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "./utils/firebase";

const AppLayout = () => {
    const [user, setUser] = useState({
        name: "",
        email: ""
    })

    useEffect(() => {

        //setting current user if any
        onAuthStateChanged(auth, (user) => {
          if(user){
            let username = user.email.slice(0, user.email.indexOf("@"));
            username = username[0].toUpperCase() + username.slice(1).toLowerCase();
            setUser({ name: username, email: user.email });
            // console.log(user);
          }
          else{
            setUser({name: "", email: ""});
            // console.log("user logged out");
          }
        })
      }, []);

  return (

    <UserContext.Provider value = {{user:user, setUser:setUser}} >
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/Careers",
        element: <Careers />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
