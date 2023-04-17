export type GameStatusProps = {
  turn: number;
  displayNumber?: number;
};

const GameStatus = (props: GameStatusProps) => {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">Turn #</div>
        <div className="stat-value mx-auto">{props.turn}</div>
        {/* <div className="stat-desc">21% more than last month</div> */}
      </div>
      <div className="stat">
        <div className="stat-title">Current number</div>
        <div className="stat-value mx-auto">{props.displayNumber}</div>
        {/* <div className="stat-desc">21% more than last month</div> */}
      </div>
    </div>
  );
};

export default GameStatus;
