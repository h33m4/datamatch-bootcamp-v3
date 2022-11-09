import React from 'react';
import './styles/PostEditor.css'

class CardEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            front: '',
            back: '',
        }
    }

    addCard = () => {
        // const [front, back] = [this.state.front, this.state.back];
        this.props.addCard(this.state);
        this.setState({
                front: '',
                back: '',
            });
    }

    // handleParentChange = (event) => {
    //     this.props.handleChange(event);
    // }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const cards = this.props.cards.map((card, i) => {
            return(
            <tr name={i} key={i}>
                <td><input onChange={this.props.handleChange} name="front" value={card.front}/></td>
                <td><input onChange={this.props.handleChange} name="back" value={card.back}/></td>
                <td>
                    <button disabled={this.props.cards.length <= 1} onClick={() => this.props.deleteCard(i)}>Delete Card</button>
                </td>
            </tr>)
        })

        return(
            <div className="flex flex-col flex-align-ctr flex-gap-sm">
                <h2>Post Editor</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Post front</th>
                            <th>Post back</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>{cards}</tbody>
                </table>
                <div className='flex flex-row flex-gap-sm flex-justify-ctr'>
                    <input name="front" onChange={this.handleChange} type="text" placeholder='Front of card' value={this.state.front}/>
                    <input name="back" onChange={this.handleChange} type="text" placeholder='Back of card' value={this.state.back}/>
                    <button disabled={this.state.front.trim()==='' || this.state.back.trim()===''} onClick={this.addCard} >Add Card</button>
                </div>
                <button onClick={this.props.switchMode}>Switch to Viewer</button>
            </div>
        );
    }
}

export default CardEditor;