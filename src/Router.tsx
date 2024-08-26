import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Header from "./Components/Header";

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<div
				className={`mt-20 sm:max-w-[100vw] md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto mb-20 py-7 flex flex-col min-h-[82vh]`}
			>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default Router;
