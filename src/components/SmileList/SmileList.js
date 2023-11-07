import React from 'react';

import './smileList.css';

class SmileList extends React.Component {
  constructor(props) {
    super(props);
}


  render() {
    const { smiles, voting} = this.props;


    return (
        <div className='list'>
          {smiles.map((item) => {
            return(
                <>
                <div className='list__item' key={item.id}>
                    <button onClick={() => voting(item.id)} className="btn">
                        <img className='img' key={item.id} alt='img' src={item?.url}></img>
                    </button>
                    <p className='count'>{item.vote}</p>
                </div>
                </>
            )
          })}
        </div>
    );
  }
}

export default SmileList;