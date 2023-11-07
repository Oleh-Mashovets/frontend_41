import React from 'react';
import './results.css'


class Results extends React.Component {
  constructor(props) {
    super(props);
}

render() {
  const { showResults, winner } = this.props;

  return (
    <div className='winner__box'>
        <button className='btn__result' onClick={showResults}>Show Results</button>
        {winner && (
          <div className='winner__block'>
            <img className='img__win' src={winner.url} alt={winner.id} />
          </div>
        )}
      </div>
  );
}

}

export default Results;