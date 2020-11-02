import React, { useState, useCallback, useEffect } from "react";
import InputConnect from "./components/InputConnect";
import Chat from "./components/Chat";
import './css/style.css';
import socketIOClient from "socket.io-client";
const socket = socketIOClient('http://localhost:4001');

function App() {
  const [lstMessage, setLstMessage] = useState([]);
  const [clientConnecter, setClientConnecter] = useState(false);
  const [pseudo, setPseudo] = useState(false);
  
  useEffect(() => {
    
    socket.on("utilisateurAccuellir", pseudo => {
      console.log(`Bienvenu ${pseudo}`);
      const h = new Date().getHours();
      const m = new Date().getMinutes();
      const s = new Date().getSeconds();
      setLstMessage(prevMessage => [...prevMessage,`${h}:${m}:${s} Bienvenu à toi ${pseudo}`]);
    });
  
    socket.on("updateChat", message => {
      console.log(`${message}`);
      setLstMessage(prevMessage => [...prevMessage,`${message}`]);
    });

    return () => socket.disconnect();

  }, []);

  const isConnected = useCallback((pseudo) => {
    setClientConnecter(true);
    setPseudo(pseudo);
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();
    setLstMessage(prevMessage => [...prevMessage,`${h}:${m}:${s} Bienvenu à toi ${pseudo}`]);
    socket.emit("utilisateurConnecter", pseudo);
  },[]);

  const sendMessage = useCallback((message) => {
    setLstMessage(prevMessage => [...prevMessage,`${message}`]);
    socket.emit("sendMessage", message);
  },[]);

  return (
    <>
      <div className="container">
        {(clientConnecter) ? (
            <Chat sendMessage={sendMessage} lstMessage={lstMessage} pseudo={pseudo} />
        ) : 
            <InputConnect isConnected={isConnected}/>
        }
      </div>
    </>
  );
}

export default App;