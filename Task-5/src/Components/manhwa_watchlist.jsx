import { useState , useContext , useEffect , createContext } from 'react';

const WatchlistContext = createContext();

export function WatchlistProvider({ children }) {

    const [watchlist, setWatchlist] = useState(() => {
        const stored = localStorage.getItem("watchlist"); 
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }, [watchlist]);

    const addToWatchlist = (manhwaId) => {
        setWatchlist((prev) => {
            if (!prev.includes(Number(manhwaId))) {
                return [...prev, Number(manhwaId)];
            }
            return prev;
        });
    };

    const removeFromWatchlist = (manhwaId) => {
        setWatchlist((prev) => prev.filter((item) => item !== Number(manhwaId)));
    };

    const isInWatchlist = (id) => watchlist.includes(Number(id));

    return (
        <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
            {children}
        </WatchlistContext.Provider>
    );
}

export const useWatchlist = () => useContext(WatchlistContext);