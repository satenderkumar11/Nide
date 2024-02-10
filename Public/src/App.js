import ReactDOM from "react-dom/client"
import Heading from "./components/Heading";
import { Home } from "./components/Home";
import { createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Jobs from "./components/Jobs";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";

const AppLayout = () => {
    return (
        <>
        <NavBar/>
        < Outlet/>
        <Footer/>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/about',
                element: <AboutUs/>
            },
            {
                path: '/jobs',
                element: <Jobs/>
            },
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/contact',
                element: <ContactUs/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);




