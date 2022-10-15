//import { Component } from "react";

import Card from '../card/card.component.jsx';

import './card-list.style.css';


const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map(
            (monster) => {
                return <Card monster={monster} key={monster.id}/>
            }
        )}
    </div>
);

// class CardList extends Component {

//     render() {
//         console.log("render component card list")
//         console.log(this.props.monster);

//         const { monster } = this.props;

//         return (
//             <div className='card-list'>
// {monster.map(
//     (monster) => {

//         return (
//             <Card monster={monster} />
//         )
//     }
// )}
//             </div>
//         )
//     }
// }

export default CardList;
