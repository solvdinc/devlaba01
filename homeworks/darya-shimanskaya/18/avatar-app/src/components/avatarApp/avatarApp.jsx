import React from 'react';
import Button from "../button/button";
import './avatarApp.css'
import Avatar from "../avatar/avatar";
import Add from "../add/add";

const getRandom = (item) => {
  return Math.floor(item.length * Math.random());
}

const getData =  async() => {
  return await fetch('https://tinyfac.es/api/users')
    .then(res => res.json());
}

const getRandomUrl = (items) => {
  return items[getRandom(items)].avatars[1].url;
}

class AvatarApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      urls:[]
    };
  }

  componentDidMount() {
    getData().then((data) => {this.setState({items: data})})
  }

  addItem = () => {
    const {items} = this.state;

    this.setState((prevState) => ({urls: [...prevState.urls, getRandomUrl(items)]}));
  }


  refreshItem = (index) => {
    const {items, urls} = this.state;

    urls.splice(index, 1, getRandomUrl(items));
    this.setState({ urls: urls });
  }

  refreshAll = () => {
    const {items, urls} = this.state;

    const url = urls.map( () => getRandomUrl(items));
    this.setState({ urls: url });
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
    )
    }
}

export default AvatarApp;