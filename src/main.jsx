import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // your global styles
import ContextProvider from "./context/ThemeContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
