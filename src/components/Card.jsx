import React from 'react';

class Card extends React.Component {
  render() {
    const { cards, onClick } = this.props;
    return (
      <>
        {
          cards.map(element => {
            return (<div className="card">
              <h1>{ element.title }</h1>
              <h2>{ element.subtitle }</h2>
              <h3>{ element.selectedGenre }</h3>
              <p>{ element.id }</p>
              <button onClick={onClick}>X</button>
            </div>)
          })
        }
      </>
    );
  }
}

export default Card;
