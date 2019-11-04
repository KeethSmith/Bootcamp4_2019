import React from 'react';




class RemoveBuilding extends React.Component {

    removeBuilding(id) {
        //Here you will need to update the value of the filter with the value from the textbox
       
		this.props.removeBuilding(id);
    }
    
    render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
        
        const {selectedBuilding} = this.props;
		return (
			<div>
				<button 
				type="button" 
                onClick={() =>   {
                    this.removeBuilding(selectedBuilding)
                    this.setState({ state: this.state });
                    }} className="center">
                    Remove Building
                </button>
			</div>
            
        );
        
       
    }
    
   

}

export default RemoveBuilding