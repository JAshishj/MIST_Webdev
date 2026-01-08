import { useWatchlist } from "./manhwa_watchlist";

const ManhwaWatchlistModal = ({ manhwa }) => {

  const {
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
  } = useWatchlist();
    
  const saved = isInWatchlist(manhwa.id);
    
  const handleWatchlistClick = () => {
    saved? removeFromWatchlist(manhwa.id) : addToWatchlist(manhwa.id);
  }

  return (
    <div>
        <div className="bg-[#1C1333] h-190 w-80 rounded-[20px] shadow-2xl">
            <img src={manhwa.image} alt={manhwa.title} className="relative h-110 rounded-[20px] hover:cursor-pointer mx-auto top-5"/>
            <div className="m-2 p-3">
                <h2 className="text-[#bd8bef] text-[30px] font-bold underline mt-3 ">{manhwa.title}</h2>
                <div className="text-[20px] mt-2 flex flex-col">
                    <div className="flex mt-1"><p className="text-[#bd8bef] font-semibold underline mr-2">Genres:-</p>  {manhwa.genres.join(", ")}</div>
                    <div className="flex mt-1"><p className="text-[#bd8bef] font-semibold underline mr-4">Rating:-</p> {manhwa.rating}</div>
                </div>
            </div>
            <button onClick={handleWatchlistClick} className="px-4 py-2.5 relative bottom-0 left-4.5 bg-[#bd8bef] text-black font-bold rounded-full hover:scale-110 transition-transform duration-100 ease-in">
                {saved ? "Remove from Watchlist" : "Add to Watchlist"}
            </button>
        </div>
    </div>
  );
}

export default ManhwaWatchlistModal;