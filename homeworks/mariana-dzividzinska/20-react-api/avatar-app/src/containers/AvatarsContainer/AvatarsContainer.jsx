import React, {useEffect, useState} from 'react';

import * as axios from 'axios';

import style from './AvatarsContainer.module.css';
import Button from '../../components/Button/Button';
import Tile from '../../components/Tile/Tile';
import Modal from '../../components/Modal/Modal';
const AvatarsContainer = () => {
  const [avatars, setAvatars] = useState([]);
  const [showingAvatarCount, setShowingAvatarCount] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    const getAvatars = async () => {
      try {
        const response = await axios.get('https://tinyfac.es/api/users');
        setAvatars([...avatars, ...response.data]);
        setServerError('');
      }
      catch {
        setServerError('Server isn\'t available');
      }
    };

    if (showingAvatarCount >= avatars.length) {
      getAvatars();
    }

  }, [showingAvatarCount, avatars, serverError]);

  const addNew = () => {
    if (serverError) {
      showModal(`REQUEST for adding a new tile was failed: ${serverError}`);
      return;
    }
    setShowingAvatarCount(showingAvatarCount + 1);
  };

  const refresh = (index) => {
    if (serverError) {
      showModal(`REQUEST for Updating the tile was failed: ${serverError}`);
      return;
    }
    const newArr = avatars;
    const updated = newArr.pop();
    newArr.splice(index, 1, updated);
    setAvatars([...newArr]);
  };

  const refreshAll = () => {
    if (!showingAvatarCount) {
      showModal('Please add at least one tile FOR refreshING all tiles');
      return;
    }
    setAvatars(avatars.slice(showingAvatarCount));
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setServerError('');
  }

  const showModal = (content) => {
    setModalText(content);
    setIsOpenModal(true);
  }

  let items = avatars.map((item, index) => {
    return index < showingAvatarCount
      && <Tile imgLink={item.avatars[1].url}
        handleRefresh={() => refresh(index)}
        key={index} />;
  });

  return (
    <div>
      {isOpenModal && <Modal content={modalText} handleClose={closeModal}>{modalText}</Modal>}
      <div className={style.container}>
      <div className={style.itemLst}>
        {items}
        <Tile handleAdd={addNew} />
      </div>
      <div className={style.footerWrapper}>
          <Button handleClick={refreshAll}>
            refresh all
            {showingAvatarCount > 0 && `(${showingAvatarCount})`}
          </Button>
      </div>
    </div>
    </div>
  );
}

export default AvatarsContainer;