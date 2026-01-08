import { useWatchlist } from "../Components/manhwa_watchlist";
import Nav from "../Components/nav";
import ManhwaData from "../Data/manhwa_data";
import ManhwaWatchlistModal from "../Components/manhwa_watchlist_modal";

const Watchlist = () => {
    const { watchlist } = useWatchlist();

    const SavedManhwas = ManhwaData.filter((manhwa) => watchlist.includes(manhwa.id));

    if (SavedManhwas.length === 0) {
        return (
            <>
                <Nav />
                <p className="bg-[#0F0A1F] min-h-screen text-white text-center text-4xl pt-45">No manhwas in watchlist.</p>
            </>
        );
    }

    return (
       <>
            <Nav />
            <div className="relative bg-[#0F0A1F] scroll-smooth flex flex-col min-h-screen text-white p-6">
                <div className="grid grid-cols-4 gap-y-6 mt-5">
                    {SavedManhwas.map((manhwa) => (
                        <ManhwaWatchlistModal key={manhwa.id} manhwa={manhwa} />
                    ))}

                </div>
            </div>
        </>
    );
}

export default Watchlist;