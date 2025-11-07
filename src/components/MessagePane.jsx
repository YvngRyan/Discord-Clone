import { ComposeForm } from "./ComposeForm";

import DEFAULT_CHAT_LOG from "../data/chat_log.json";

export function MessagePane(props) {
    const { currentChannel } = props;

    const messageObjArray = DEFAULT_CHAT_LOG.filter((chatObj) => chatObj.channel === currentChannel).sort((m1, m2) => m1.timestamp - m2.timestamp);

    const messageElemArray = messageObjArray.map((chatObj) => {
        const elem = <MessageItem key={chatObj.timestamp} messageData={chatObj} />
        return elem;
    });

    return (
        <div className="scrollable-pane mt-2">
            {messageElemArray}
            <ComposeForm />
        </div>
    )
}

function MessageItem(props) {
    const messageData = props.messageData;
    const {userName, text, userImg} = messageData;
    return (
        <div className="message m-2">
            <div className="d-flex">
                <img className="me-1" src={userImg}/>
                <p><strong>{userName}</strong></p>
            </div>
            <p>{text}</p>
        </div>
    )
}