import React, { useState } from 'react';
import Button from './components/Button/Button.jsx';
import ButtonAdd from './components/ButtonAdd/ButtonAdd.jsx';
import Image from './components/Image/Image.jsx';
import './App.scss';

function App() {
  const [people, setPeople] = useState([]);
  const [loader, setLoader] = useState(false);

  async function getAvatar() {
    const response = await fetch('https://tinyfac.es/api/users');
    if (!response.ok) {
      const message = `The response has the error: ${response.status}`;
      throw new Error(message);
    }
    const result = await response.json();
    return result[0];
  }

  const addAvatar = () => {
    getAvatar().then((avatar) => {
      setPeople((prevAvatar) => [...prevAvatar, avatar]);
      setLoader(false);
    });
  };

  const refreshAvatar = (index) => {
    getAvatar().then((avatar) => {
      const refresh = [...people];
      refresh.splice(index, 1, avatar);
      setPeople([...refresh]);
      setLoader(false);
    });
  };

  async function refreshAllAvatars() {
    setLoader(true);
    const refreshAll = [...people];
    const refreshAvatars = await Promise.all(
      refreshAll.map((avatar) => getAvatar())
    );
    setPeople(refreshAvatars);
    setLoader(false);
  }
  return (
    <div className="container">
      <div className="container__card">
        {people.map((person, index) => (
          <Image
            key={index.toString()}
            onClick={() => refreshAvatar(index)}
            src={person.avatars[0].url}
            loader={loader ? loader.toString() : null}
          />
        ))}
        <ButtonAdd onClick={addAvatar}></ButtonAdd>
      </div>
      <div className="container__refresh">
        {people.length ? (
          <Button onClick={refreshAllAvatars}>Refresh All</Button>
        ) : null}
      </div>
    </div>
  );
}
export default App;
