import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';

//  extend react component to get special features
class App extends Component {
  constructor(props) {
    //  super allows for use of the Components methods we imported from react
    super(props);

    // state holds all of our data we are working with in the component
    this.state = {
      picture: '',
      name: '',
      friends: []
    };
    //
    this.updatePicture = this.updatePicture.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  //  update picture method takes in the value passed in and calls setState() to update the state of the component
  updatePicture(event) {
    console.log(event.target.value);
    // setState( will cause a rerendering of your component with the new data
    this.setState({ picture: event.target.value });
  }

  updateName(event) {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  }

  addFriend() {
    const { name, picture, friends } = this.state;
    // let newFriends = friends.slice()
    // newFriends.push({ picture: picture, name: name });
    // this.setState({ friends: newFriends, picture: '', name: '' });
    this.setState({
      friends: [...friends, { name: name, picture: picture }],
      name: '',
      picture: ''
    });
  }

  render() {
    // destructor state to avoid rewriting "this.state" multi times
    const { friends, name, picture } = this.state;
    console.log(friends);
    // map over friends array returning the pertinent values wrapped in JSX and set equal to a new valiable called mappedFriends
    const mappedFriends = friends.map((element, index, array) => {
      // you must always return from a map
      return (
        // key is required on the outer most parent when mapping over an array
        <div key={element.name}>
          {/* conditionally rendering styles based on the index */}
          <img
            style={{
              width: '100px',
              border: index % 2 === 1 ? 'red 1px solid' : 'blue 1px solid'
            }}
            src={element.picture}
          />
          <span>{element.name}</span>
        </div>
      );
    });
    return (
      <div>
        {/* example of component based architecture and reusability  */}
        <Header label="this is now my header from prop" />
        <label>Picture</label>
        <input onChange={this.updatePicture} value={picture} />

        <label>Name</label>
        <input onChange={event => this.updateName(event)} value={name} />

        <button onClick={this.addFriend}>Add Friend</button>
        {/* render mapped over friends list */}
        {mappedFriends}
      </div>
    );
  }
}

export default App;
