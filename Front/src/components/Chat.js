import React, { useState } from 'react';

const Chat = ({lstMessage, sendMessage, pseudo}) => {

    const [message, setMessage] = useState(false);
    const onChange = (e) => {
        setMessage(e.target.value);
    }  
    const onClick = (e) => {
        const h = new Date().getHours();
        const m = new Date().getMinutes();
        const s = new Date().getSeconds();
        sendMessage(`${h}:${m}:${s} ${pseudo} => ${message}`);
    }

    return (
        <>
            <div className="row">
                
                <div className="input-field col l3 offset-l4">
                    <input id="message" type="text" onChange={(e) => onChange(e)} />
                    <label htmlFor="message">Votre message</label>
                </div>

                <button class="btn waves-effect waves-light" type="submit" name="action" onClick={(e) => onClick(e)}>Envoyer
                </button>
                
            </div>
            <div className="row lstMessage">

                {lstMessage.map( (message, index) =>(
                    <React.Fragment key={index}>
                        <p className="theMessage">{message}</p>
                    </React.Fragment>
                ))}

            </div>
                
        </>
    )
};

export default Chat