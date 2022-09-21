import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // name: {firstName: 'Yihua', lastName: 'Zhang'},
      // company: 'ZTM'
      monsters: [],
    }

    console.log('Process constructor');
  }

  componentDidMount() {
    console.log('Process componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => 
        this.setState(
          () => {
            return { monsters: users }
          },
          () => {
            console.log(this.state);
          })
      );
  }

  render() {
    console.log('Process render');
    return (
      <div className='App'>
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          //console.log(event.target.value);
          const filteredMonster = this.state.monsters.filter((monster) => {
            return monster.name.includes(event.target.value);
          });

          console.log(filteredMonster);

          this.setState(() => {
            return { monster: filteredMonster };
          });
       }}/>
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>);
          })
        }
      </div>
    );
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>Hi {this.state.name.firstName} {this.state.name.lastName}, I dont work at {this.state.company}</p>
    //       <button onClick={() => {
    //         // this.state.name = 'Andrei'it
    //         // this.setState({name: {firstName: 'Jordy', lastName: 'Castro'}})
    //         this.setState( () => {
    //           return {
    //             name: {firstName: 'Jordy', lastName: 'Castro'}
    //           }
    //         }, () => {
    //           console.log(this.state);
    //         })
    //         //console.log(this.state)
    //       }}>Change Name</button>
    //     </header>
    //   </div>
    // );
  };
}

export default App;
