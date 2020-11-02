import React, { useState } from 'react';

const ChatSend = ({lstMessage}) => {

    return (
        <>
            <div className="row">
                
                {lstMessage.map( (message, index) =>(
                    <React.Fragment key={index}>
                        <p>{message}</p>
                    </React.Fragment>
                ))}
                
            </div>
        </>
    )
};

export default ChatSend