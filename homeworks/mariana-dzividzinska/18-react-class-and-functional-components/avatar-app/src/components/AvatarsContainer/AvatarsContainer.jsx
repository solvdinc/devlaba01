import React, {Component} from 'react';

import * as axios from 'axios';

import style from './AvatarsContainer.module.css';
import { Button } from '../Button/Button';
import { Item } from '../Item/Item';

class AvatarsContainer extends Component {
  constructor(props) {
    super(props);

    this.state={
      avatars: [],
      showingAvatarCount: 0,
    };
  }

  async componentDidUpdate() {
    let count = 0;
    if(this.state.showingAvatarCount === this.state.avatars.length) {
      count = 1;
    }
    else {
      count = Math.ceil((this.state.showingAvatarCount - this.state.avatars.length) / 13);
    }

    while(count > 0) {
      const response = await axios.get('https://tinyfac.es/api/users');
      this.setState({
        avatars: [...this.state.avatars, ...response.data],
      });
      count -= 1;
    }
  }

  addNew = () => {
    this.setState((state) => ({
      showingAvatarCount: state.showingAvatarCount + 1,
    }));
  }

  refresh = (index) => {
    const newArr = this.state.avatars;
    const updated = newArr.pop();
    newArr.splice(index, 1, updated);
    this.setState({
      avatars: newArr,
    });
  }

  refreshAll = () => {
    this.setState({
      avatars: this.state.avatars.slice(this.state.showingAvatarCount),
    });
  }

  render() {
    let items = this.state.avatars.map((item, index) => {
      return index < this.state.showingAvatarCount
        && <Item imgLink={item.avatars[1].url} handleRefresh={() => this.refresh(index)} />;
    });

    return (
      <div className={style.container}>
        <div className={style.itemLst}>
          {items}
          <Item handleAdd={this.addNew} />
        </div>
        <div className={style.footerWrapper}>
          <Button name='REFRESH ALL' handleClick={this.refreshAll} />
        </div>
      </div>
    );
  }
}

export default AvatarsContainer;