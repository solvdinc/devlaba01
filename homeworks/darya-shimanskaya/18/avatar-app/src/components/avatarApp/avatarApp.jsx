import React from 'react';
import Button from '../button/button';
import './avatarApp.css'
import Avatar from '../avatar/avatar';
import Add from '../add/add';

const getRandom = (item) => {
  return Math.floor(item.length * Math.random());
};

const getData =  async () => {
  return await fetch('https://tinyfac.es/api/users').then(res => res.json());
};

const getUrl = (items, index) => {
  return items[index].avatars[1].url;
};

class AvatarApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      urls: [],
      index: 0,
    };
  }

  componentDidMount() {
    getData().then((data) => {this.setState({ items: data })});
  }

  componentDidUpdate() {
    const {urls, index} = this.state;

    if (urls.length === 13 && index === 0) {
      getData().then((data) => {this.setState({ items: data })});
    }
  }

  addItem = () => {
    const {items, index} = this.state;

    if (index >= 13) {
      this.setState({ index: 0 })
    } else {
      this.setState((prevState) => ({ urls: [...prevState.urls, getUrl(items, index)], index: index + 1 }));
    }

  }

  refreshItem = (index) => {
    const {items, urls} = this.state;

    urls.splice(index, 1, items[getRandom(items)].avatars[1].url);
    this.setState({ urls: urls });
  }

  refreshAll = () => {
    const {items, urls} = this.state;

    getData().then((data) => {this.setState({ items: data })});
    const newUrls = urls.map( () => items[getRandom(items)].avatars[1].url);
    this.setState({ urls: newUrls });
}

  render() {
    const {urls} = this.state;

    return (
      <div className="container">
        <div className={'avatar-container'}>
          {urls.map((url, index) => (
            <Avatar key={index} src={url} callback={() => this.refreshItem(index)}/>
            ))}
          <Add onClick={this.addItem}/>
        </div>
        <Button className={'refresh-btn'} onClick={this.refreshAll}>Refresh All</Button>
      </div>
    );
  }
}

export default AvatarApp;