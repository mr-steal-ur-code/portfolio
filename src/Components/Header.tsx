import Avatar from "./Avatar";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
	return (
		<div className="fixed top-0 w-full flex flex-col text-white z-50 h-20">
			<div className="flex flex-row items-center justify-between px-4 bg-gradient-to-b from-primaryGradient-0 to-primaryGradient-1 flex-1">
				<ThemeSwitch />
				<Avatar />
			</div>
		</div>
	);
};

export default Header;
