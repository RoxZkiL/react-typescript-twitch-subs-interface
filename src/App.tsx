import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import { List } from './components/List';
import {Sub} from "./types"

interface AppState {
  subs: Array<Sub>
  newSubs: number
}

const initialState = [
  {
    nick: "elvergalarga",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=elvergalarga",
    description: "aprendiz de programacion"
  },
  {
    nick: "rosamelano",
    subMonths: 2,
    avatar: "https://i.pravatar.cc/150?u=rosamelano",
  }
];


function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([]);

  const [newSubscribers, setNewSuscribers] = useState<AppState["newSubs"]>(0);

  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setSubs(initialState);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub]);
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Subs de Twitch</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
