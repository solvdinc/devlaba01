import React, { useEffect, useState } from 'react';

import * as axios from 'axios';
import { ErrorBoundary } from 'react-error-boundary';

import style from './AvatarsContainer.module.css';
import Button from '../../components/Button/Button';
import Tile from '../../components/Tile/Tile';
import Modal from '../../components/Modal/Modal';
import ErrorTile from '../../components/ErrorTile/ErrorTile';

const AvatarsContainer = () => {
  const [avatars, setAvatars] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [serverError, setServerError] = useState('');
  const [isAvailableAdd, setIsAvailableAdd] = useState(true);

  const getAvatarApi = async () => {
    const response = await axios.get('https://laba-backend.herokuapp.com/tile');
    return response.data;
  };

  const addNew = async () => {
    setIsAvailableAdd(false);
    let avatarsCopy = [...avatars];
    avatarsCopy.push({ imgLink: '', isLoaded: false });
    setAvatars([...avatarsCopy]);

    try {
      const data = await getAvatarApi();
      avatarsCopy[avatarsCopy.length - 1].imgLink = data.avatar;
      avatarsCopy[avatarsCopy.length - 1].isLoaded = true;
    } catch (e) {
      showModal(`REQUEST for adding a new tile was failed: ${e.message}`);
      avatarsCopy.pop();
    } finally {
      setAvatars([...avatarsCopy]);
      setIsAvailableAdd(true);
    }
  };

  const refresh = async (index) => {
    let avatarsCopy = [...avatars];
    avatarsCopy[index].isLoaded = false;
    setAvatars([...avatarsCopy]);

    try {
      const data = await getAvatarApi();
      avatarsCopy[index].imgLink = data.avatar;
    } catch (e) {
      throw Error(`REQUEST for adding a new tile was failed: ${e.message}`);
    } finally {
      avatarsCopy[index].isLoaded = true;
      setAvatars([...avatarsCopy]);
    }
  };

  const refreshItem = async (index) => {
    try {
      await refresh(index);
    } catch (e) {
      showModal(e.message);
    }
  };

  const refreshAll = () => {
    try {
      avatars.forEach((item, index) => {
        refresh(index);
      });
    } catch {}
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setServerError('');
  };

  const showModal = (content) => {
    setModalText(content);
    setIsOpenModal(true);
  };

  let itemsNew = avatars.map((item, index) => {
    return (
      <ErrorBoundary
        FallbackComponent={ErrorTile}
        key={index}
        onReset={() => {
          refreshItem(index);
        }}
        resetKeys={[avatars]}
      >
        <Tile
          key={index}
          imgLink={item.imgLink}
          isLoading={!item.isLoaded}
          handleRefresh={() => refreshItem(index)}
        />
      </ErrorBoundary>
    );
  });

  return (
    <>
      {isOpenModal && (
        <Modal content={modalText} handleClose={closeModal}>
          {modalText}
        </Modal>
      )}
      <div className={style.container}>
        <div className={style.itemLst}>
          {itemsNew}
          {isAvailableAdd && <Tile handleAdd={addNew} />}
        </div>
        <div className={style.footerWrapper}>
          <Button handleClick={refreshAll}>
            refresh all
            {avatars.length > 0 && `(${avatars.length})`}
          </Button>
        </div>
      </div>
    </>
  );
};

export default AvatarsContainer;
