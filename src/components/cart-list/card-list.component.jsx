import { Component } from "react";

class CardList extends Component {
    
    render() {
        console.log("render component card list")
        console.log(this.props.monster);

        const { monster } = this.props;

        return (
            <div>
                {
                    monster.map(
                        monster => (<h1 key={monster.id}>{monster.name}</h1>)
                    )
                }           
            </div>

        )
    }
}

export default CardList;
