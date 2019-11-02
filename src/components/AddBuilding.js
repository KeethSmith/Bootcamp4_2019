import React from 'react';

class AddBuilding extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            code: '',
            address: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        //console.log(event.target.value);
    }


    handleSubmit(event) {
        console.log('A code was submitted: ' + this.state.code);
        console.log('A name was submitted: ' + this.state.name);
        console.log('An address was submitted: ' + this.state.address);
        console.log(this.state);
        event.preventDefault();
        this.props.handleSubmit(this.state);
        
    }

    render() {


        return (
            <form onSubmit={this.handleSubmit}>

                <input 
                type="text" 
                name = "code"
                onChange={this.handleChange}
                placeholder="Type to Add Code"
                />
                
                <input 
                type="text" 
                name = "name"
                onChange={this.handleChange}
                placeholder="Type to Add Name"
                />
                
                <input 
                type="text" 
                name = "address"
                onChange={this.handleChange}
                placeholder="Type to Add Address"
                />

                <input 
                type ="Submit"
                value="Submit"
                />

            </form>
        );
    }
}
export default AddBuilding;