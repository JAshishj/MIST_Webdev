import { useWatchlist } from "./manhwa_watchlist";

const ManhwaSearchModal = ({ manhwa }) => {

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
    <div className="bg-transparent inset-0 justify-center items-center block m-2 mt-10">
      <div className="flex relative gap-0 bg-[#1C1333] w-auto h-125 rounded-[50px] shadow-2xl">
        <img src={manhwa.image} alt={manhwa.title} className="absolute h-110 top-8 left-[78%] rounded-[20px] "/>
        <div className=" text-white text-2xl w-[80%] h-[80%] bg-[#1C1333] rounded-[20px] p-6 my-6 overflow-y-auto">
          <h2 className="text-[#bd8bef] text-[50px] font-bold underline ">{manhwa.title} :-</h2>
          <div className="text-[28px] pt-5 pb-3 justify-between">
            <p className="inline-block pl-3 pr-1 text-[#bd8bef] font-semibold underline">Genres: </p> {manhwa.genres.join(", ")}
            <p className="inline-block pl-15 pr-1 text-[#bd8bef] font-semibold underline">Rating: </p> {manhwa.rating}
            <p className="inline-block pl-17 pr-1 text-[#bd8bef] font-semibold underline">Status: </p> {manhwa.status}
          </div>
          <p className="text-[30px] pt-5">{manhwa.description}</p>
          <button onClick={handleWatchlistClick} className="absolute bottom-[15%] left-13 bg-[#bd8bef] text-black font-bold py-3 px-6 rounded-full hover:scale-110 transition-transform duration-100 ease-in">
            {saved ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManhwaSearchModal;