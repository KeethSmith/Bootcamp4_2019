import React from 'react';

class AddBuilding extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            code: '',
            name: '',
            coordinates: {
                latitude: 0,
                longitude: 0
            },
            address: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeLatitude = this.handleChangeLatitude.bind(this);
        this.handleChangeLongitude = this.handleChangeLongitude.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }
    

    handleChange(event) {
        this.setState({id:this.props.data.length+1});        
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target);
    }

    handleChangeLatitude(event) {
        this.setState({ coordinates:{[event.target.name] : event.target.value, longitude:this.state.coordinates.longitude} });
        console.log(event.target.value);
        console.log(event.target.name);

    }

    handleChangeLongitude(event) {
        this.setState({ coordinates:{latitude:this.state.coordinates.latitude  ,[event.target.name] : event.target.value} });
        console.log(event.target.value);
        console.log(event.target.name);
    }

    handleSubmit(event) {
        console.log(this.state.id);
        this.props.handleSubmit(this.state);
        event.preventDefault();
        event.target.reset();
    }

    render() {


        return (
            
            <form onSubmit={this.handleSubmit}>
                <b>Code: </b>   
                <input 
                type="text" 
                name = "code"
                onChange={this.handleChange}
                placeholder="Type to Add Code"
                />
                <p></p>
                <b>Name: </b> 
                <input 
                type="text" 
                name = "name"
                onChange={this.handleChange}
                placeholder="Type to Add Name"
                />
                <p></p>
                <b>Address: </b> 
                <input 
                type="text" 
                name = "address"
                onChange={this.handleChange}
                placeholder="Type to Add Address"
                />
                <p></p>
                <b>Latitude: </b> 
                <input 
                type="text" 
                name="latitude" 
                onChange={this.handleChangeLatitude}
                placeholder="Type to Add Latitude"
                />
                <p></p>
                <b>Longitude: </b> 
                <input 
                type="text"
                name="longitude" 
                onChange={this.handleChangeLongitude}
                placeholder="Type to Add Longitude"
                />
                <p></p>
                <input 
                text-align="center"
                type ="Submit"
                value="Submit"
                
                />
            
            </form>
           
        );
    }
}
export default AddBuilding;