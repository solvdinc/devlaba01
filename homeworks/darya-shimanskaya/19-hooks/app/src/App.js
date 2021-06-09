import React, {useState, useEffect} from 'react';
import './App.css'
import Avatar from "./components/Avatar/Avatar";
import Add from "./components/Add/Add";
import Button from "./components/Button/Button";


const App = () => {
  const [items, setItems] = useState([]);
  const [urls, setUrls] = useState([]);

  const getRandom = (item) => {
    return Math.floor(item.length * Math.random());
  }

  const getData =  async() => {
    return await fetch('https://tinyfac.es/api/users')
      .then(res => res.json());
  }

  const getRandomUrl = (items) => {
    return items[getRandom(items)].avatars[1].url
  }

  useEffect(() => {
    getData().then((data) => setItems(data));
  }, []);

  const addItem = () => {
    setUrls([...urls, getRandomUrl(items)]);
  }

  const refreshItem = (index) => {
    urls.splice(index, 1, getRandomUrl(items));
    setUrls([...urls]);
  }

  const refreshAll = () => {
    const newUrls = urls.map( () => getRandomUrl(items));
    setUrls(newUrls);
  }

  return (
    <div className="container">
      <div className={'avatar-container'}>
        {urls.map((url, index) => (
          <Avatar key={index} src={url} callback={() => refreshItem(index)}/>
        ))}
        <Add onClick={addItem}/>
      </div>
      <Button className={'refresh-btn'} onClick={refreshAll}>Refresh All</Button>
    </div>
  );
}

export default App;