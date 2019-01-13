import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios-orders";
import css from "./ContactData.css";

class ContactData extends Component {

    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        },
        price: 0,
        loading: false
    }

    orderHandler = (e) => {
        console.log(this.props);
        e.preventDefault(); // prevent form from reloading 
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Calvin Pang",
                address: {
                    street: "Teststreet 1",
                    zipCode: "12345",
                    country: "US"
                },
                email: "test@test.com"
            },
            deliveryMethod: "fastest"
        };
        axios.post("/orders.json", order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>  
                <input className={css.Input} type="text" name="name" placeholder="Your name" />
                <input className={css.Input} type="email" name="email" placeholder="Your Mail" />
                <input className={css.Input} type="text" name="street" placeholder="Street" />
                <input className={css.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={css.ContactData}>
                <h4>Enter you Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;