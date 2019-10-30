import React from 'react';


class ViewBuilding extends React.Component {
	render() {
		const {selectedBuilding,data} = this.props;
		const buildingName = this.props.data.selectedBuilding
		const viewBuilding = selectedBuilding
		const buildingList = data
		.filter(id => {
			//remove names that do not match current filterText
			return id.name.indexOf(buildingName) 		  })
		.map(directory => 
			{
			return (
				<tr 
				key={directory.id}>
					<td> {directory.code} </td>
					<td> {directory.name} </td>
					<td> {directory.address} </td>
					
				</tr>
			);
		});

		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
				{buildingName}
				<p></p>
				{viewBuilding}
				<p></p>
				{buildingList}
			</div>
		);
	}
}
export default ViewBuilding;
