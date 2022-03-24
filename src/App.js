import logo from "./logo.svg";
import "./App.css";
import Router from "./router";
import ThemeConfig from "./theme";
import {UserProvider} from "./context/ContextUser"
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
