import React from 'react';
import moment from 'moment';

const ChatDisplay = ({ conversation }) => {

    return (
        <div>
            {
                conversation.map((mes, index) => {
                    return (
                        <div key={`msg-${index}`}>
                            {/* {console.log(mes)} */}
                            <div className="mb-5">
                                <img src={`https://api.hello-avatar.com/adorables/150/${mes.username}.png`} />
                                <strong>{mes.username}</strong>
                                <p>{mes.message}</p>
                                <p><small>{moment(mes.timestamp).calendar()}</small></p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ChatDisplay;