import React from 'react';
import './TinyFaces.css';
import Button from '../Shared/Button/Button';
import getPhotos from '../../services/getData';

const Face = (props) => {
  return (
    <div className="face">
      <img className="face-img" src={props.img} alt="face" />
    </div>
  );
};

export default class TinyFaces extends React.Component {
  constructor() {
    super();
    this.state = {
      url: [],
    };
  }

  getRandom(data) {
    const min = data.length - data.length;
    const max = data.length - 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  pushToState(data) {
    let randNum = this.getRandom(data);
    let newValue = data[randNum].avatars[3].url;

    while (this.state.url.includes(newValue)) {
      randNum = this.getRandom(data);
      newValue = data[randNum].avatars[3].url;
    }

    this.setState({
      url: [...this.state.url, newValue],
    });
  }

  pushImage = () => {
    getPhotos().then((data) => {
      console.log(data);
      this.pushToState(data);
    });
  };

  render() {
    return (
      <div className="tiny-faces-container">
        {this.state.url.map((url, i) => (
          <Face key={i} img={url} />
        ))}
        <Button className="add-btn" onClick={this.pushImage} />
      </div>
    );
  }
}
