import { FiSun } from "react-icons/fi";
import { useTheme } from "../ThemeContext";
import { IoMoonSharp } from "react-icons/io5";

const ThemeSwitch: React.FC = () => {
	const { toggleTheme, theme } = useTheme();
	return (
		<div className="flex flex-row gap-1 items-center">
			<FiSun className="h-7 w-7 text-warning" />
			<label className="switch">
				<input
					type="checkbox"
					checked={theme === "dark"}
					onChange={toggleTheme}
				/>
				<span className="slider"></span>
			</label>
			<IoMoonSharp className="h-7 w-7 text-blue-200" />
		</div>
	);
};

export default ThemeSwitch;
