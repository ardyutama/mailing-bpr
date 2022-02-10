import logo from "./logo.svg";
import "./App.css";
import Router from "./Components/Router/Router";
import ThemeConfig from "./Components/Theme";

function App() {
    return (
        <ThemeConfig>
            <Router />
        </ThemeConfig>
    );
}

export default App;
