import React from 'react';
import Link from 'next/link';

const NavBar = ({
  switchConvo,
  friends,
  newMessage,
  changeHome,
  changeMessage,
  addConvo,
  currentChat,
  newMessageCount
}) => {
  const newMessageNum = Object.values(newMessageCount).reduce(
    (total, cur) => total + cur,
    0,
  );

  return (
    <div id="navbar-container">
      <div id="convo-status">
        Chatting with <br />
        {currentChat}
      </div>
      <Link href="/browser" prefetch>
        <a id="house-button2">
          <i className="fa fa-home"> Browse</i>
        </a>
      </Link>
      <div className="dropdown">
        <button className="dropbtn">
          <i className="fas fa-bars"> Menu</i>
        </button>
        <span>
        {newMessage && (
          <div id="new-message-badge" className="msg-count-badge">
            {newMessage ? newMessageNum : ''}
          </div>
        )}
      </span>
        <div className="dropdown-content">
          <a onClick={addConvo}>Start a new convo</a>
          {/* gets the 5 most recent convos, not sure if it makes sense to have a giant list of
           people */}
          {friends.slice(-5).map((friend, i) => (
            <a key={i} onClick={() => switchConvo(`${friend}`)}>
              {newMessageCount[friend] && (
                <div className="msg-count-badge">{newMessageCount[friend]}</div>
              )}
              {friend}
            </a>
          ))}
          <a id='add-agent-button'
          onClick={() => switchConvo('AgentDemo')}>
            Chat with an agent
          </a>
        </div>
      </div>
      <style>
        {`
        .msg-count-badge {
          background: red;
          color: white;
          margin-right: 1em;
          font-size: .75em;
          z-index: 1;
          border-radius: 100%;
          line-height: 1.2em;
          height: 1.2em;
          width: 1.2em;
          text-align: center;
          display: inline-block;
        }
        #new-message-badge {
          position: absolute;
          margin-right: 0;
        }
        #convo-status {
          color: white;
          font-size: .8em;
          position: relative; /*  */
        }
        a {
          font-size: 12px;
          cursor: pointer;
        }
        #navbar-container {
          height: 2.3em;
          margin-top: .5em;
          display: flex;
          justify-content: space-around; /* changed to space-around from flex-end */
          background-color: #0069E0;
          z-index: 1;
        }
        #house-button {
          margin-right: 12px;
          width: auto; /* deleted height */
        }
        #house-button:hover {
          transform: scale(1.2); /* added zoom */
        }
        #house-button2 {
          color: white;
          position: relative;
          left: 1.5em;
          font-size:1em;
          margin-top: .37em
        }
        .dropbtn {
            background-color: #0069E0;
            color: white;
            font-size: 1em; /* changed to 1em from 16px */
            border: none;
            cursor: pointer;
            width: 80px;
            text-align: end;
            margin-top: .27em;
            z-index: 1;
        }
        .dropdown {
            position: relative;
            display: inline-block;
            float: right;
        }
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }
        .dropdown-content a {
            color: black;
             padding: .5em 16px;
            text-decoration: none;
            display: block;
        }
        .dropdown-content a:hover {background-color: #f1f1f1}
        .dropdown:hover .dropdown-content {
            display: block;
        }
        .dropdown:hover .dropbtn {
            background-color: #0069E0;
        }
      `}
      </style>
    </div>
  );
};

export default NavBar;
