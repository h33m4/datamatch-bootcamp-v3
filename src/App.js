import React from "react";
import PostEditor from "./PostEditor";
import PostViewer from './PostViewer';
import { NavBar } from "./NavBar";
import {
  Routes,
  Route 
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {front: "You know what's not funny?", back: ''},
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
    if (this.state.editor) {
      return (
        <>
          <NavBar/>
          <PostEditor className="flex flex-col flex-jc" 
            handleChange={this.handleChange} 
            switchMode={this.switchMode} 
            deleteCard={this.deleteCard} 
            addCard={this.addCard}
            cards={this.state.cards} />
        </>
      )
    }

    if (!this.state.editor) {
      return (
        <>
          <NavBar/>
          <PostViewer 
            switchMode={this.switchMode} 
            cards={this.state.cards} />
        </>
      )
    }
  }
}

export default App;
