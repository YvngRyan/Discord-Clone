import React from 'react';

import { HeaderBar } from './HeaderBar';
import { ChannelList } from './ChannelList';
import { MessagePane } from './MessagePane';

function App(props) {

    const channelNamesArray = ["general", "social", "random", "dank-memes", "birds"];
    const currentChannel = "general";

    return (
        <div className="container-fluid d-flex flex-column">
            <HeaderBar />
            <div className="row flex-grow-1">
                <div className="col-3 pe-0">
                    <ChannelList channelNames={channelNamesArray} currentChannel={currentChannel}/>
                </div>
                <div className="col d-flex flex-column">
                    <MessagePane currentChannel={currentChannel} />                    
                </div>             
            </div>
        </div>
    );
}

export default App;