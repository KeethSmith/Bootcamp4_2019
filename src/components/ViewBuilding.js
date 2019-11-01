import React from 'react';


class ViewBuilding extends React.Component {
	render() {
		const {selectedBuilding,data} = this.props;
		const buildingList = data
		.filter(directory => {
			//remove names that do not match current filterText
			return directory.id === selectedBuilding })
		.map(directory => 
			{
			return (
				<tr> 
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
				<p></p>
				{buildingList}
			</div>
		);
	}
}
export default ViewBuilding;
