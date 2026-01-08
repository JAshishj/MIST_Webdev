import { useState } from "react";
import Nav from "../Components/nav";
import ManhwaData from "../Data/manhwa_data";
import ManhwaSearchModal from "../Components/manhwa_search_modal";

const Search = () => {
    const [query, setQuery] = useState("");
    const filteredManhwas = ManhwaData.filter( (manhwa) =>manhwa.title.toLowerCase().includes(query.toLowerCase()) );
    return (
        <>
            <Nav />
            <div className="relative bg-[#0F0A1F] scroll-smooth flex flex-col min-h-screen text-white p-6">
                <div className="text-3xl text-center mb-10"> 
                    <input type="text" id="searchInput" value={query} onChange={ (e) => setQuery(e.target.value) } className="w-3/4 p-2 mt-2 rounded-md text-white bg-[#2f2644]" placeholder="Search for manhwas..."></input>
                </div>
                { query !== "" ?                   
                (<div> {filteredManhwas.length > 0 ? 
                    (<> <div className="text-4xl mt-2 ">Showing {filteredManhwas.length} results for "{query}"  :
                    <div className="flex flex-col gap-2 mt-2">
                        {filteredManhwas.map((manhwa) => (<ManhwaSearchModal key={manhwa.id} manhwa={manhwa} /> ))}</div>
                    </div> </>) :
                    (<div className="text-4xl text-center mt-20">No manhwa found.</div>)} </div>)
                :
                (<div className="text-4xl text-center mt-20">Find your favorite manhwa and save it to your watch list !</div>)
                }
            </div>
        </>
    );
};
export default Search;