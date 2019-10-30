import React from 'react';

class BuilingList extends React.Component {
	selectedUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		const id = this.myValue.id
		this.props.selectedUpdate(id)
	}

	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate} = this.props;		  

		const buildingList = data
		.filter(name => {
			//remove names that do not match current filterText
			return name.name.indexOf(filterText) >= 0
		  })
		
		.map(directory => 
			{
			return (
				<tr 
				key={directory.id} 
				onClick={() => selectedUpdate(directory.id)}
				>
					<td> {directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
