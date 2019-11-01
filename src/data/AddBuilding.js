import React from 'react';

class AddBuilding extends React.Component {

    formUpdate() {
        const val = this.myValue.value
        this.props.formUpdate(val)       
    }

    handleSubmit() {
        const thing = this.target.value
        this.props.handleSubmit(thing)
        console.log(thing)
    }

    render() {


        return (
            <form>

                <input 
                type="text"
                ref={ (newBuild) => {this.myValue = newBuild} }
                onChange={this.formUpdate.bind(this)}
                placeholder="Type to Add Building"
                />
                <input 
                type ="submit"
                onClick={this.handleSubmit.bind(this)}
            
                
                ></input>

            </form>
        );

    }




}
export default AddBuilding;