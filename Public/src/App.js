import ReactDOM from "react-dom/client"
import Heading from "./components/Heading";
import { Home } from "./components/Home";
import { createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Careers from "./components/Careers";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <NavBar/>
        < Outlet/>
        <Footer />
        </div>
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
                path: '/Careers',
                element: <Careers/>
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




