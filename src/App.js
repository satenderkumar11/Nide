import ReactDOM from "react-dom/client"
import Heading from "./components/Heading";

const App = () => {
    return (
        <Heading/>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);




