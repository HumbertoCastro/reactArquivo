import React from 'react';
import Card  from './Card'

class CreateCard extends React.Component {
  constructor() {
    super();

    this.state = ({
      title: 'Titulo provisorio',
      subtitle: 'Titulo provisorio',
      selectedGenre: 'genero provisorio',
      cards: [],
      vazio: true,
      numero: 0,
    });
    this.handle = this.handle.bind(this);
    this.gerarCard = this.gerarCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  handle = ({ target: { value, name } }) => {
    this.setState({
      [name] : value,
    })
  }

  deleteCard = ({ target }) => {
    this.setState({
      numero: this.state.numero - 1,
    })
    target.parentElement.remove();
  }

  gerarCard = () => {
    const { title, subtitle, selectedGenre, cards, numero } = this.state;
    const newObject = {
      title,
      subtitle,
      selectedGenre,
      id: numero,
    }
    const newArray = cards;
    newArray.push(newObject);
    this.setState({
      cards: newArray,
      vazio: false,
      numero: numero + 1,
    }, () => {
      console.log(cards);
    })
  }

  render() {
    const { vazio, cards} = this.state;
    return(
      <div>
        <form>
          <input type="text" onChange={ this.handle} placeholder="nome" name="title" /> 
          <input type="text" onChange={ this.handle} placeholder="subtitulo" name="subtitle" />
          <select
              name="selectedGenre"
              onChange={ this.handle }
            >
              <option value="">nenhum</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
          </select>
          <button type="button" onClick={this.gerarCard}>
            gerarCard
          </button>
        </form>
        {
          vazio ? null : <Card cards={cards} onClick={ this.deleteCard } />
        }
      </div>
    )
  }
}

export default CreateCard;