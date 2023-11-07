import React from 'react';
import SmileList from './SmileList/SmileList';
import Results from './Results/Results';

import smile_1 from '../assets/images/smile_1.png';
import smile_2 from '../assets/images/smile_2.png';
import smile_3 from '../assets/images/smile_3.png';
import smile_4 from '../assets/images/smile_4.png';
import smile_5 from '../assets/images/smile_5.png';
import smile_6 from '../assets/images/smile_6.png';

import './index.css';

class SmileyContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      smiles: [
        {
          id: 1,
          vote: 0,
          url: smile_1,
        },
        {
          id: 2,
          vote: 0,
          url: smile_2,
        },
        {
          id: 3,
          vote: 0,
          url: smile_3,
        },
        {
          id: 4,
          vote: 0,
          url: smile_4,
        },
        {
          id: 5,
          vote: 0,
          url: smile_5,
        },
        {
          id: 6,
          vote: 0,
          url: smile_6,
        },
      ],
      winner: null,
    };
    this.voteSmile = this.voteSmile.bind(this);
    this.showResults = this.showResults.bind(this);
  }

  voteSmile(id) {
    this.setState((prevState) => ({
      smiles: prevState.smiles.map((item) => {
        if (item.id === id) {
          return { ...item, vote: item.vote + 1 };
        }
        return item;
      }),
    }));
  }

  showResults() {
    const maxCount = Math.max(...this.state.smiles.map((smile) => smile.vote));
    const winner = this.state.smiles.find((smile) => smile.vote === maxCount);

    if (winner) {
        this.setState({winner: winner})
    }
  }

  render() {
    return (
      <>
        <div className='wrapper'>
          <SmileList smiles={this.state.smiles} voting={this.voteSmile} />
          <Results showResults={this.showResults} winner={this.state.winner}/>
        </div>
      </>
    );
  }
}

export default SmileyContainer;