import React, { Component } from 'react';
import axios from 'axios';

class PizzaUpdate extends Component {
    constructor(props) {
        super(props);

        // Ensure obj_to_update is initialized properly
        const obj = this.props.pizzeriaUpdate || {}; // Fallback to an empty object if undefined
        this.state = {
            obj_to_update: obj,
            pizzeria_name: obj.pizzeria_name || '', // Use obj's properties or fallback to empty strings
            street: obj.street || '',
            city: obj.city || '',
            state: obj.state || '',
            zip_code: obj.zip_code || '',
            website: obj.website || '',
            phone_number: obj.phone_number || '',
            description: obj.description || '',
            email: obj.email || '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { obj_to_update } = this.state;
    
        if (!obj_to_update || !obj_to_update.update) {
            console.error("The update URL is not defined.");
            return;
        }
    
        axios.patch(process.env.REACT_APP_URL.concat(obj_to_update.update), {
            pizzeria_name: this.state.pizzeria_name,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zip_code: this.state.zip_code,
            website: this.state.website,
            phone_number: this.state.phone_number,
            description: this.state.description,
            email: this.state.email,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    

    render() {
        const { pizzeria_name, street, city, state, zip_code, website, phone_number, description, email } = this.state;
        return (
            <div style={{ color: "red", border: "1px solid red" }}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Pizzeria
                        <input
                            type="text"
                            name="pizzeria_name"
                            value={pizzeria_name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Address
                        <input
                            type="text"
                            name="street"
                            value={street}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        State
                        <input
                            type="text"
                            name="state"
                            value={state}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        City
                        <input
                            type="text"
                            name="city"
                            value={city}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Zip
                        <input
                            type="text"
                            name="zip_code"
                            value={zip_code}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Website
                        <input
                            type="text"
                            name="website"
                            value={website}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Phone
                        <input
                            type="text"
                            name="phone_number"
                            value={phone_number}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Description
                        <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Email
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <input style={{ backgroundColor: 'black', color: 'white' }} type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default PizzaUpdate;
