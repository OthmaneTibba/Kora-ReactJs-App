const FixtureCard = (props) => {
  const {
    homeTeamName,
    homeTeamImage,
    awayTeamName,
    awayTeamImage,
    homeTeamScore,
    awayTeamScore,
    status,
    time,
  } = props;
  return (
    <div className="text-white font-bold text-[1rem] w-[350px] md:w-[600px] h-[100px] m-3 bg-[#1b1c1b] rounded-lg shadow-xl border border-gray-400 flex flex-row justify-between px-5 items-center scale-100 duration-1000 cursor-pointer hover:scale-110">
      <div className="flex  w-[120px] flex-col justify-center items-center">
        <img className="w-[50px]" src={homeTeamImage} alt={homeTeamName} />
        <p className="text-center">{homeTeamName}</p>
      </div>
      <div className="flex flex-col justify-around items-center">
        <div className="w-[100px] bg-gray-700 rounded-lg flex flex-row justify-center">
          <p>{homeTeamScore}</p>
          <p>:</p>
          <p>{awayTeamScore}</p>
        </div>
        <div>{time}</div>
        <div>{status}</div>
      </div>
      <div className="w-[120px] flex flex-col justify-center items-center">
        <img className="w-[50px]" src={awayTeamImage} alt={awayTeamName} />
        <p className="text-center">{awayTeamName}</p>
      </div>
    </div>
  );
};

export default FixtureCard;
