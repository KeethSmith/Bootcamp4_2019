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
				<div className={"viewBuilding"}>

				<p></p>
				<p></p>
					


					<p> <b>Code:  </b>  {directory.code} </p>
					<p> <b>Building Name:  </b>  {directory.name} </p>
					
					{ directory.address ? 
					[
						<div>
						<p> <b>Address:  </b>  {directory.address} </p>
						</div>
					]
					: null }

					{ directory.coordinates ? 
					[
						<div>
						<p> <b>Coordinates:  </b>  </p>
						<p className="tab"> <b>Latitude:  </b>  {directory.coordinates.latitude} </p>
						<p className="tab"> <b>Longitude:  </b>  {directory.coordinates.longitude} </p>
						</div>
					]
					: null }



					

				</div>
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
