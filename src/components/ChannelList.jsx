export function ChannelList(props) {
    const { channelNames, currentChannel } = props;
    const elemArray = channelNames.map(channelNameString => {
        let classListString = "px-2";
        if (channelNameString === currentChannel) {
            classListString += " bg-warning";
        }

        const transformed = (
            <li className={classListString} key={channelNameString}>
                <a className="text-white" href={"/" + channelNameString}>
                    {channelNameString}
                </a>
            </li>
        )
        return transformed;
    })
    
    return (
        <nav className="text-white bg-secondary h-100 px-0 pe-3 py-3">
            <ul className="px-0">
                {elemArray}
            </ul>
        </nav>
    )
}