import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header className="bg-[#0F0A1F]">
            <h1 className="text-5xl text-[#D8B4FE] text-center pt-2 pb-4 underline">Manhwa Explorer</h1>
            <nav className="bg-[#1C1333] text-center border-2 rounded-xl shadow-inner">
                <ul className="text-[24px] text-[#C084FC] p-2 m-0 list-none">
                    <li className="inline-block px-10 hover:text-[#A855F7] hover:underline"><Link to="/">Home</Link></li>
                    <li className="inline-block px-10 hover:text-[#A855F7] hover:underline"><Link to="/Search">Search</Link></li>
                    <li className="inline-block px-10 hover:text-[#A855F7] hover:underline"><Link to="/Watchlist">Watchlist</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;