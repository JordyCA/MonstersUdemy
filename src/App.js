import {Component} from 'react';

import CardList from './components/cart-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            // name: {firstName: 'Yihua', lastName: 'Zhang'},
            // company: 'ZTM'
            monsters: [],
            searchField: ''
        }

        console.log('Process constructor');
    }

    componentDidMount() {
        console.log('Process componentDidMount')
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then((users) => this.setState(() => {
            return {monsters: users}
        }, () => {
            console.log(this.state);
        }));
    }

    onSearchChangue = (event) => { // console.log(event.target.value);
        console.log({startingArray: this.state.monsters});
        const searchField = event.target.value.toLocaleLowerCase();
        // console.log(filteredMonster);
        this.setState(() => {
            return {searchField};
        });
    }

    render() {
        console.log('Process render');

        const {monsters, searchField} = this.state;
        const {onSearchChangue} = this;

        const filteredMonster = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

        return (<div className='App'>
            <SearchBox className='search-box' onChangeHandler={onSearchChangue} placeholder='search monsters'></SearchBox>
            <CardList monster={filteredMonster}/>
        </div>);
        // return (
        // <div className="App">
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
        // </div>
        // );
    };
}

export default App;
