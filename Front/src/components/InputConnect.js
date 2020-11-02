import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TextInput = ({isConnected = () => {} }) =>{
    
    const [pseudo, setPseudo] = useState("");

    const onChange = (e) => {
        setPseudo(e.target.value);
    }    
    
    const onClick = (e) => {
        //setClientConnecter(true);
        isConnected(`${pseudo}`);
    }
    
    return (
        <div className="row">
            
            <div className="input-field col l3 offset-l4">
                <input id="speudo" type="text" onChange={(e) => onChange(e)} />
                <label htmlFor="speudo">Votre pseudo</label>
            </div>

            <button class="btn waves-effect waves-light" type="submit" name="action" onClick={(e) => onClick(e)}>Se Connecter
            </button>

        </div>
    )
};

export default TextInput

//<span className="test col l3 blue-text darken-3">Votre pseudo</span>

/*
<div className="switch">
<label>
Off
<input type="checkbox"/>
<span className="lever"></span>
On
</label>
</div>
<FontAwesomeIcon icon={["far", "coffee"]} />
<FontAwesomeIcon icon="check-square" />
*/