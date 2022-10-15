//import {Component} from 'react';
import { useState, useEffect } from 'react';

import CardList from './components/cart-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {

    // console.log('render');

    const [searchField, setSearchField] = useState(''); //** [value, setValue]
    const [monsters, setMonsters] = useState([]);
    const [filterMonsters, setFilterMonsters] = useState(monsters);
    //const [stringFlied, setStringFiled] = useState('');

    //console.log({searchField});
    // console.log(searchField);

    // console.log('Render');

    useEffect(() => {
        console.log('UseEffect')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => setMonsters(users)
            );
    }, []);

    const onSearchChangue = (event) => {
        //console.log({startingArray: this.state.monsters});
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }

 
    useEffect(() => {
        const newFilteredMonster = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
        setFilterMonsters(newFilteredMonster);
        // console.log('effect is firing');
    }, [monsters, searchField]);

    // const onStringFlied = (event) => {
    //     setStringFiled(event.target.value);
    // }

    const filteredMonster = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
    });

    //console.log(filteredMonster);

    return (
        <div className='App'>
            <h1 className='app-title'>Monster Rolodex</h1>
            <SearchBox className='monster-search-box' onChangeHandler={onSearchChangue} placeholder='search monsters'></SearchBox>
            {/* <SearchBox onChangeHandler={onStringFlied} placeholder='set String field'></SearchBox> */}
            <CardList monsters={filteredMonster}/>
        </div>
    );
}

// class App extends Component {
//     constructor() {
//         super();

//         this.state = {
//             // name: {firstName: 'Yihua', lastName: 'Zhang'},
//             // company: 'ZTM'
//             monsters: [],
//             searchField: ''
//         }

//         console.log('Process constructor');
//     }

//     componentDidMount() {
//         console.log('Process componentDidMount')
//         fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then((users) => this.setState(() => {
//             return {monsters: users}
//         }, () => {
//             console.log(this.state);
//         }));
//     }

//     onSearchChangue = (event) => { // console.log(event.target.value);
//         console.log({startingArray: this.state.monsters});
//         const searchField = event.target.value.toLocaleLowerCase();
//         // console.log(filteredMonster);
//         this.setState(() => {
//             return {searchField};
//         });
//     }

//     render() {
//         console.log('Process render');

//         const {monsters, searchField} = this.state;
//         const {onSearchChangue} = this;

//         const filteredMonster = monsters.filter((monster) => {
//             return monster.name.toLocaleLowerCase().includes(searchField);
//         });

//         return (<div className='App'>
//             <h1 className='app-title'>Monster Rolodex</h1>
//             <SearchBox className='monster-search-box' onChangeHandler={onSearchChangue} placeholder='search monsters'></SearchBox>
//             <CardList monster={filteredMonster}/>
//         </div>);
//     };
// }

export default App;
