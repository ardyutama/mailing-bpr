import logo from "./logo.svg";
import "./App.css";
import Router from "./Components/Router/Router";
import ThemeConfig from "./Components/Theme";
import {UserProvider} from "./Components/context/ContextUser"
function App() {
    return (
        <ThemeConfig>
            <UserProvider>
                <Router />
            </UserProvider>
        </ThemeConfig>
    );
}

export default App;
