import React from 'react';

class Header extends React.Component {
  // O BIND DAS FUNÇOES E DECLARAÇAO DO ESTADO NO SEU COMPONENT
  constructor() {
    super();

    this.state = ({
      title: 'Titulo provisorio',
    });

    this.handle = this.handle.bind(this);
  }

  handle = ({ target }) => {
    if (target.value === '') {
      this.setState({ title: 'titulo provisorio' })
    } else this.setState({ title: target.value });
  }

  render() {
    return (
      <header>
        <h1 className="page-title">{ this.state.title }</h1>
        <input type="text" onChange={ this.handle } placeholder="name" />
      </header>
    );
  }
}

export default Header;
