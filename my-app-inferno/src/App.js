// src/App.js

import Inferno from 'inferno';
import Component from 'inferno-component';
import ApiService from './utils/ApiService';
import './App.css';

class App extends Component {
  componentDidMount() {
    // GET list of dinosaurs from API
    ApiService.getDinoList()
      .then(
        res => {
          // Set state with fetched dinos list
          this.setState({
            dinos: res
          });
        },
        error => {
          // An error occurred, set state with error
          this.setState({
            error: error
          });
        }
      );
  }

  render(props, state) {
    return(
      <div className="App">
        <header className="App-header bg-primary clearfix">
          <h1 className="text-center">Dinosaurs</h1>
        </header>
        <div className="App-content container-fluid">
          <div className="row">
            {
              state.dinos ? (
                <ul>
                  {
                    state.dinos.map((dino) => (
                      <li key={dino.id}>{dino.name}</li>
                    ))
                  }
                </ul>
              ) : (
                <p>Loading...</p>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;