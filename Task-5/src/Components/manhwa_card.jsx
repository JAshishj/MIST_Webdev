
const ManhwaCard = ({ manhwa, onClick }) => {
  return (
    <div className="manhwa-card" onClick={onClick}>
      <img src={manhwa.image} alt={manhwa.title} className="h-100 rounded-[20px] hover:scale-110 transition-all hover:cursor-pointer"/>
    </div>
  );
};

export default ManhwaCard;
