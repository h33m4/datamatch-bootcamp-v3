import React from 'react';
import './styles/CardViewer.css'
import { Link } from 'react-router-dom';

class CardViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            empty: this.props.cards.length === 0 ? true : false,
            showFront: true,
        }
    }

    changeCard = (step) => {
        this.setState({index: this.state.index + step, showFront: true});
    }

    renderCard = (i) => {
        const cards = this.props.cards.slice();
        if (i >= cards.length) {
            return <div>No more cards in this deck...</div>
        } else {
            const currentCard = this.props.cards[i];
            return <div>{this.state.showFront ? currentCard.front : currentCard.back}</div>;
        }
    }

    flipCard = () => {
        this.setState({showFront: !this.state.showFront});
    }

    render() {
        const i = this.state.index;

        return (
            <div className="flex flex-col flex-align-ctr flex-gap-sm">
                <h2>Card Viewer</h2>
                <h3>Currently viewing card: {this.state.empty ? 0 : i + 1} out of {this.props.cards.length}</h3>
                <div className='card' onClick={this.flipCard}>
                    {this.renderCard(i)}
                </div>
                <div>
                    <button disabled={this.state.index <= 0 ? true : false} onClick={() => this.changeCard(-1)}>Previous</button>
                    <button disabled={this.state.index >= this.props.cards.length - 1 ? true : false} onClick={() => this.changeCard(1)}>Next</button>
                </div>
                <button><Link to="/editor">Switch to Editor</Link></button>
            </div>

        )
    }
}

export default CardViewer;