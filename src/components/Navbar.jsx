import personalLogo from "../assets/AB-logos_transparent.png";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar-container flex items-center justify-between px-10 transition-all font-medium">
			<div className="navbar-logo flex items-center justify-center transform hover:scale-125  cursor-pointer transition-all  animate-pulse">
				<img src={personalLogo} alt="my personal logo" className="h-12 w-auto " />
				Barut
			</div>
			<ul className="navbar-menu flex gap-20">
				<li className="hover:scale-125   transition-all">
					<Link to="/">Home</Link>
				</li>
				<li className="hover:scale-125 transition-all">
					<Link to="/">About</Link>
				</li>
				<li className="hover:scale-125 transition-all">
					<Link to="/">Portfolio</Link>
				</li>
				<li className="hover:scale-125 transition-all">
					<Link to="/">Pages</Link>
				</li>
			</ul>
			<div className="navbar-mail flex items-center justify-center gap-1 hover:scale-125  transition-all">
				<CiMail className="text-2xl" />
				<Link to="/">andreibarut@gmail.com</Link>
			</div>
		</nav>
	);
};

export default Navbar;
