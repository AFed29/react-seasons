import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor (props) {
    super(props);

    // the only time that there is direct assignment to this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // setState is always what is used to update state!
        this.setState({ lat: position.coords.latitude })
      },
      (err) => console.log(err)
    );
  }

  // React says we have to define render
  render () {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
