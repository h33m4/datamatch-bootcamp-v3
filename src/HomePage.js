import React from "react";
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <h1>Welcome to the Flashcards App!</h1>
                <hr></hr>
                <br></br>
                <div className="flex flex-row flex-gap-sm flex-justify-ctr">
                    <Link to="/editor"><button>Go to Editor</button></Link>
                    <Link to="/viewer"><button>Go to Viewer</button></Link>
                </div>
            </div>
        )
    }
}

export default HomePage;