import React from 'react';

import { HeaderBar } from './HeaderBar';
import { ChannelList } from './ChanneList';
import { MessagePane } from './MessagePane';

function App(props) {
    return (
        <div>
            <HeaderBar />
            <div class="d-flex">
                <ChannelList />
                <MessagePane />
            </div>
        </div>
    );
}

export default App;