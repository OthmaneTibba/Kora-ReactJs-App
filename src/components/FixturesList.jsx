import React from "react";
import FixtureCard from "./FixtureCard";

const FixturesList = (props) => {
  return (
    <div>
      {props.fixtures.map((fixture) => (
        <FixtureCard
          homeTeamName={fixture.homeTeam.name}
          homeTeamImage={fixture.homeTeam.image}
          awayTeamName={fixture.awayTeam.name}
          awayTeamImage={fixture.awayTeam.image}
          homeTeamScore={fixture.homeTeamScore}
          awayTeamScore={fixture.awayTeamScore}
          status={fixture.status}
          time={fixture.time}
          key={fixture.homeTeam.name}
        />
      ))}
    </div>
  );
};

export default FixturesList;
