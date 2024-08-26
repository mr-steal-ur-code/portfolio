import ReactDOM from "react-dom/client";
import { ThemeContextProvider } from "./ThemeContext";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ThemeContextProvider>
		<Router />
	</ThemeContextProvider>
);
