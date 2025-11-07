import DEFAULT_CHAT_LOG from "../data/chat_log.json";

import { ComposeForm } from "./ComposeForm";

export function MessagePane(props) {
    const messageItems = DEFAULT_CHAT_LOG.map(messageItem => {
        const transformed = (
            <MessageItem messageData={messageItem} key={messageItem.timestamp}/>
        )
        return transformed;
    })

    return (
        <div>
            {messageItems}
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