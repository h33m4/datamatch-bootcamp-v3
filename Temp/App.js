import React from "react";
import CardEditor from "./CardEditor";
import CardViewer from './CardViewer';
import HomePage from './HomePage';
import {
  Routes,
  Route 
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {front: 'front1', back: 'back1'},
        {front: 'front2', back: 'back2'},
      ],
      editor: true,
    }
  }

  addCard = (card) => {
    const cards = this.state.cards.slice().concat([card]);
    this.setState({cards});
  }

  deleteCard = (i) => {
    const cards = this.state.cards.slice(0,i).concat(this.state.cards.slice(i+1));
    this.setState({cards});
  }

  switchMode = () => {
    this.setState({editor: !this.state.editor});
  }

  handleChange = (event) => {
    const side = event.currentTarget.name;
    const index = event.target.parentNode.parentNode.getAttribute('name');
    const cards = this.state.cards.slice();
    cards[index][side] = event.target.value;
    this.setState({cards});
  }

  render() {
    const cardEditor = <CardEditor handleChange={this.handleChange} switchMode={this.switchMode} deleteCard={this.deleteCard} addCard={this.addCard} className="flex flex-col flex-jc" cards={this.state.cards} />
    const cardViewer = <CardViewer switchMode={this.switchMode} cards={this.state.cards} />
    return (
      <Routes>
          <Route path="/editor" element={cardEditor}/>
          <Route path="/viewer" element={cardViewer}/>
          <Route path="/" element={<HomePage />}/>
      </Routes>
      );
  }
}

export default App;
