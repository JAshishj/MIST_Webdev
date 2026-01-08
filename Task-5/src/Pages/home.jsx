import { useState } from "react";
import Nav from "../Components/nav";
import ManhwaData from "../Data/manhwa_data";
import ManhwaCard from "../Components/manhwa_card"; 
import ManhwaModal from "../Components/manhwa_modal";

const Home = () => {
    const [selectedManhwa, setSelectedManhwa] = useState(null);

    return (
        <> 
            <Nav />
            <div className="relative bg-[#0F0A1F] scroll-smooth flex flex-col min-h-screen text-white p-6">

                <h1 className="text-4xl font-bold mb-4">Welcome to the Manhwa Explorer</h1>
                <p className="text-lg mb-6">This is the main landing page of the application.</p>

                <div className="grid grid-cols-5 gap-y-10 gap-x-6">
                    {ManhwaData.map((manhwa) => (
                        <ManhwaCard key={manhwa.id} manhwa={manhwa} onClick={() => setSelectedManhwa(manhwa)} />
                    ))}
                </div>

                {selectedManhwa && (<ManhwaModal manhwa={selectedManhwa} onClose={() => setSelectedManhwa(null)}/>)}

            </div>
        </>
    );
}

export default Home;