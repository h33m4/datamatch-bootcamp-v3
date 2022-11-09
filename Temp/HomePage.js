import React from "react";
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <h1>Welcome to the Sidechat MVP - Web Edition!</h1>
                <hr></hr>
                <br></br>
                <div className="flex flex-row flex-gap-sm flex-justify-ctr">
                    <Link to="/editor"><button>Go to Post Editor</button></Link>
                    <Link to="/viewer"><button>Go to Post Viewer</button></Link>
                </div>
            </div>
        )
    }
}

export default HomePage;