import React, {useEffect, useState} from 'react';

import * as axios from 'axios';

import style from './AvatarsContainer.module.css';
import { Button } from '../../components/Button/Button';
import { Tile } from '../../components/Tile/Tile';

export const AvatarsContainerFunctional = () => {
  const [avatars, setAvatars] = useState([]);
  const [showingAvatarCount, setShowingAvatarCount] = useState(0);

  useEffect(() => {
    const getAvatars = async () => {
      const response = await axios.get('https://tinyfac.es/api/users');
      setAvatars([...avatars, ...response.data]);
    };

    if (showingAvatarCount >= avatars.length) {
      getAvatars();
    }

  }, [showingAvatarCount, avatars]);

  const addNew = () => {
    setShowingAvatarCount(showingAvatarCount + 1);
  };

  const refresh = (index) => {
    const newArr = avatars;
    const updated = newArr.pop();
    newArr.splice(index, 1, updated);
    setAvatars([...newArr]);
  };

  const refreshAll = () => {
    setAvatars(avatars.slice(showingAvatarCount));
  };
  
  let items = avatars.map((item, index) => {
    return index < showingAvatarCount
      && <Tile imgLink={item.avatars[1].url} handleRefresh={() => refresh(index) } />;
  });

  return (
    <div className={style.container}>
      <div className={style.itemLst}>
        {items}
        <Tile handleAdd={addNew} />
      </div>
      <div className={style.footerWrapper}>
        <Button name='REFRESH ALL' handleClick={refreshAll} />
      </div>
    </div>
  );
}