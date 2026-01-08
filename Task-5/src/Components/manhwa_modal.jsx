import { useWatchlist } from './manhwa_watchlist';

const ManhwaModal = ({ manhwa, onClose }) => {

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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs justify-center items-center flex z-50">
      <div className="flex relative gap-5 bg-[#0F0A1F] w-[90%] h-[90%] rounded-[50px] shadow-2xl p-5 m-2">
        <img src={manhwa.image} alt={manhwa.title} className="absolute bottom-[10%] right-4 h-125 rounded-[20px] "/>
        <div className="absolute text-white text-2xl w-[70%] h-[85%] bg-[#1C1333] rounded-[20px] p-6 my-7 ml-1.5 overflow-y-auto">
          <h2 className="text-[#bd8bef] text-[50px] font-bold underline">{manhwa.title}:-</h2>
          <div className="text-[27px] mt-2 pt-5 pb-3 justify-between">
            <p className="inline-block pl-3 pr-1 text-[#bd8bef] font-semibold underline">Genres: </p> {manhwa.genres.join(", ")}
            <p className="inline-block pl-15 pr-1 text-[#bd8bef] font-semibold underline">Rating: </p> {manhwa.rating}
            <p className="inline-block pl-17 pr-1 text-[#bd8bef] font-semibold underline">Status: </p> {manhwa.status}
          </div>
          <p className="text-[29px] pt-5">{manhwa.description}</p>
        </div>
          <button onClick={handleWatchlistClick} className="absolute bottom-[15%] left-13 bg-[#bd8bef] text-black font-bold py-3 px-6 rounded-full hover:scale-110 transition-transform duration-100 ease-in">
            {saved ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
      </div>
      <div className="absolute top-10 right-10 text-white text-4xl font-bold cursor-pointer z-50 hover:scale-125 transition-transform duration-200" onClick={onClose}>X</div>
    </div>
  );
};

export default ManhwaModal;
