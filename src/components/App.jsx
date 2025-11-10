import React, { useState } from 'react';

import { HeaderBar } from './HeaderBar';
import { ChannelList } from './ChannelList';
import { MessagePane } from './MessagePane';

function App(props) {

    const [currentUser, setCurrentUser] = useState({userId: null, userName: "Null", userImg: "/img/null.webp"});

    const channelNamesArray = ["general", "social", "random", "dank-memes", "birds"];
    const currentChannel = "general";

    const changeUser = (newUserObject) => {
        setCurrentUser(newUserObject);
    }

    return (
        <div className="container-fluid d-flex flex-column">
            <HeaderBar currentUser={currentUser} changeUserFunction={changeUser}/>
            <div className="row flex-grow-1">
                <div className="col-2 pe-0">
                    <ChannelList channelNames={channelNamesArray} currentChannel={currentChannel}/>
                </div>
                <div className="col d-flex flex-column">
                    <MessagePane currentChannel={currentChannel} currentUser={currentUser}/>                    
                </div>             
            </div>
        </div>
    );
}

export default App;