import React, {useState, useEffect} from 'react';
import './App.css'
import Avatar from './components/Avatar/Avatar';
import Add from './components/Add/Add';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

const App = () => {
  const [items, setItems] = useState([]);
  const [urls, setUrls] = useState([]);
  const [index, setIndex] = useState(0);
  const [modalText, setModalText] = useState('');
  const [showModal, setModalShow] = useState(false);

  const getRandom = (item) => {
    return Math.floor(item.length * Math.random());
  };

  const getData =  async() => {
    return await fetch('https://tinyfac.es/api/users')
      .then(res => res.json());
  };

  const getRandomUrl = (items) => {
    return items[getRandom(items)].avatars[1].url;
  };

  useEffect(() => {
    getData().then((data) => setItems(data));
  }, []);

  const addItem = () => {
    if (urls.length >= 13) {
      setModalShow(true);
      setModalText('Request for adding a new tile was failed: can not add more than 13 avatars');
    } else {
      setUrls([...urls, items[index].avatars[1].url])
      setIndex(index + 1);
    }
  };

  const refreshItem = (i) => {
    const newUrl = getRandomUrl(items);
    if (urls.indexOf(newUrl) === -1) {
      urls.splice(i, 1, newUrl);
      setUrls([...urls]);
    } else {
      setModalShow(true);
      (urls.length === 13) ? setModalText('Request for Updating the tile was failed: no unique avatars')
        : setModalText('Request for Updating the tile was failed: existing avatar. Please, repeat your request')
    }
  };

  const refreshAll = () => {
    if (!urls.length) {
      setModalShow(true);
      setModalText('Please add at least one tile for refreshing all tiles')
    }
    getData().then((data) => {
      const newUrls = urls.map((item, i) => data[i].avatars[1].url);
      setUrls(newUrls);
    });
  };

  return (
    <>
      <div className="container">
        <div className={'avatar-container'}>
          {urls.map((url, index) => (
            <Avatar key={index} src={url} callback={() => refreshItem(index)}/>
          ))}
          <Add onClick={addItem}/>
        </div>
        <Button className={'refresh-btn'} onClick={refreshAll}>Refresh {urls.length > 0 && urls.length} tile{(urls.length > 1) ? `s ` : null}</Button>
      </div>
      {showModal && <Modal content={modalText}  callback={() => setModalShow(false)}/>}
    </>
  );
};

export default App;