import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Hello world"
    };
  }

  componentDidMount() {
    // For initial data
    this.fetchData();
  }

  fetchData = () => {
    axios.get(`https://hello-rails-sc.herokuapp.com/api/example/index`)
    .then(res => {
      this.setState({text:res.data});
    })
  };

  render() {
    const onClickFct = this.fetchData.bind(this);
    return this.state.text ? (
      <div className="App">
        <header className="App-header">
          <div>{this.state.text}</div>
          <button className="generate-button" onClick={onClickFct}>Generate a new random text</button>
        </header>
      </div>
    ) : "";
  }
}

export default App;
