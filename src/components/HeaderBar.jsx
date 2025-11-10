import React from 'react';

const DEFAULT_USERS = [
    {userId: null, userName: "Null", userImg: "/img/null.webp"},
    {userId: "panda", userName: "Panda", userImg: "/img/panda.jpeg"},
    {userId: "tiger", userName: "Tiger", userImg: "img/tiger.jpg"},
    {userId: "elephant", userName: "Elephant", userImg: "img/elephant.avif"},
    {userId: "zebra", userName: "Zebra", userImg: "img/zebra.jpeg" },
    {userId: "bunny", userName: "Bunny", userImg: "img/bunny.jpeg" }
]

export function HeaderBar(props) {

    const { currentUser, changeUserFunction } = props;
    const handleClick = (event) => {
        const whichUser = event.currentTarget.name
        const selectedUserObj = DEFAULT_USERS.filter((userObj) =>
            userObj.userId === whichUser)[0] || DEFAULT_USERS[0]

            console.log(selectedUserObj);
        changeUserFunction(selectedUserObj);
    }

    const userButtons = DEFAULT_USERS.map((userObj) => {
        let classListString = "btn user-icon"

        if (currentUser && userObj.userId === currentUser.userId) {
            classListString += " bg-success";
        }

        return (
            <button className={classListString} key={userObj.userName} name={userObj.userId} onClick={handleClick}>
                <img src={userObj.userImg} alt={userObj.userName + " avatar"}/>
            </button>
        )
    })
    return (
        <header className="text-light bg-primary px-1 d-flex justify-content-between">
            <h1>Discord Clone</h1>
            <div>
                {userButtons}
            </div>
        </header>
    );
}