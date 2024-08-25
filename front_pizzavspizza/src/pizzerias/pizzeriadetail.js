import React, { Component } from 'react'
import PizzaUpdate from './pizzeriaupdate'
class PizzaDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            showComponent:false,
        };
        this.updatePizzeriaDetails = this.updatePizzeriaDetails.bind(this);
    }

    updatePizzeriaDetails(){
        this.setState({showComponent:true});
    }

    render(){

        const obj = this.props.pizzeriaDetail;
        return(
            <div style = {{color:"yellow",border:"1px solid yellow"}}>
                <h4>{obj.pizzeria_name}</h4>
                <h5>
                    Address: {obj.street} {obj.city} {obj.state} {obj.zip_code}
                </h5>
                <h6>Phone: {obj.phone_number}</h6>
                <p>{obj.description}</p>
                <button
                style={{backgroundColor:"black",color:"white"}}
                onClick={() => this.updatePizzeriaDetails()}>
                    Update
                </button>
                {this.state.showComponent ? <PizzaUpdate pizzeriaUpdate = {obj} /> :null}
            </div>
        )
    }
}

export default PizzaDetail;