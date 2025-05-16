
export default function Log({ turns }) {
  return ( 
    <ol id="log">
      {turns.map((turn) => {
        const { square, player } = turn;
        const { row, col } = square;

        return (
          <li key={`${row}${col}`}>
            <span className="log-player">{player}</span>
            <span className="log-square">
              {`(${row}, ${col})`}
            </span>
          </li>
        );
      })}
    </ol>
   );
}