import React from "react";
import PostEditor from "./PostEditor";
import PostViewer from './PostViewer';
import HomePage from './HomePage';
import {
  Routes,
  Route,
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {front: 'front1', back: 'back1'},
        {front: 'front2', back: 'back2'},
      ],
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

  handleChange = (event) => {
    const side = event.currentTarget.name;
    const index = event.target.parentNode.parentNode.getAttribute('name');
    const cards = this.state.cards.slice();
    cards[index][side] = event.target.value;
    this.setState({cards});
  }

  render() {
    const postEditor = <PostEditor handleChange={this.handleChange} switchMode={this.switchMode} deleteCard={this.deleteCard} addCard={this.addCard} className="flex flex-col flex-jc" cards={this.state.cards} />
    const postViewer = <PostViewer switchMode={this.switchMode} cards={this.state.cards} />
    return (
      <Routes>
          <Route path="/editor" element={postEditor}/>
          <Route path="/viewer" element={postViewer}/>
          <Route path="/" element={<HomePage />}/>
      </Routes>
      );
  }
}

export default App;