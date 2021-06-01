import React from 'react';
import changeImg from '../../assets/svg/001-refresh.svg';
import './TinyFaces.css';
import Button from '../Shared/Button/Button';
import getPhotos from '../../services/getData';

const Face = ({ img, ...rest }) => {
  return (
    <div className="face">
      <img className="face-img" src={img} alt="face" {...rest} />
      <img src={changeImg} alt="change" className="face-change" />
    </div>
  );
};

export default class TinyFaces extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      url: [],
      isDisable: true,
    };
  }

  componentDidMount() {
    getPhotos().then((data) => {
      this.setState({
        data: data,
        isDisable: false,
      });
    });
  }

  updateFaces = () => {
    getPhotos().then((data) => {
      this.setState({
        data: data,
      });

      const url = this.state.url.map(
        (el, i) => this.state.data[i].avatars[1].url,
      );

      this.setState({
        url: url,
      });
    });
  };

  createFace = () => {
    const face = this.state.data.find(
      (el) => !this.state.url.includes(el.avatars[1].url),
    );
    if (face) {
      this.setState({
        url: [...this.state.url, face.avatars[1].url],
      });
    }
    if (this.state.url.length === 13) {
      this.setState({
        isDisable: true,
      });
    }
  };

  changeFace = (e) => {
    const face = this.state.data.find(
      (el) => !this.state.url.includes(el.avatars[1].url),
    );

    const urls = this.state.url.map((el) =>
      el === e.target.src ? face.avatars[1].url : el,
    );

    this.setState({
      url: urls,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="tiny-faces-container">
          {this.state.url.map((url, i) => (
            <Face key={i} img={url} onClick={this.changeFace} />
          ))}
          <Button
            disabled={this.state.isDisable}
            className="add-btn"
            onClick={this.createFace}
          />
        </div>
        <div className="refresh-btn-container">
          <Button className="refresh-btn" onClick={this.updateFaces}>
            Refresh All
          </Button>
        </div>
      </div>
    );
  }
}
