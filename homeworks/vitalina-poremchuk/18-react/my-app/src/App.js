import './App.css';
import React from 'react';
import Button from './components/Button/Button.jsx';
import ButtonAdd from './components/ButtonAdd/ButtonAdd.jsx';
import Image from './components/Image/Image.jsx';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      loader: false,
    };
  }

  async getAvatar() {
    const response = await fetch('https://tinyfac.es/api/users');
    if (!response.ok) {
      const message = `The response has the error: ${response.status}`;
      throw new Error(message);
    }
    const result = await response.json();
    return result[0];
  }

  async addAvatar() {
    this.getAvatar().then((avatar) => {
      this.setState((prevAvatar) => ({
        people: [...prevAvatar.people, { ...avatar, loader: false }],
      }));
    });
  }

  async refreshAvatar(index) {
    this.getAvatar().then((avatar) => {
      const refresh = [...this.state.people];
      refresh.splice(index, 1, avatar);
      this.setState({
        people: refresh,
      });
    });
  }

  async refreshAllAvatars() {
    this.setState({
      loader: true,
    });
    const refreshAll = [...this.state.people];
    const refreshAvatars = await Promise.all(
      refreshAll.map((avatar) => this.getAvatar())
    );
    this.setState({
      people: refreshAvatars,
      loader: false,
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='container__card'>
          {this.state.people.map((person, index) => (
            <Image
              key={index}
              onClick={() => this.refreshAvatar(index)}
              src={person.avatars[0].url}
              loader={this.state.loader ? this.state.loader.toString() : null}
            />
          ))}
          <ButtonAdd onClick={() => this.addAvatar()}></ButtonAdd>
        </div>
        <div className='container__refresh'>
          {this.state.people.length ? (
            <Button onClick={() => this.refreshAllAvatars()}>
              Refresh All
            </Button>
          ) : null}
        </div>
      </div>
    );
  }
}
export default App;
