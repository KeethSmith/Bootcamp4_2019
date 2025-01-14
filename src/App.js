import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import './App.css';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: [],
      newBuild: []
      
    };
  }


  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })

  }

  handleSubmit(newBuild) {
    this.setState(()=>
     {
      console.log(newBuild);
      this.props.data.push(newBuild);  
         
    })
  }

  removeBuilding(sel) 
  {
      this.setState(()=>
      {     
        console.log(this.props.data.length);   
        delete this.props.data[sel-1];
        //data.push[]        
      })
  }
  


  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1 className="title">UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
        />

        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedBuilding={this.state.selectedBuilding}
                    selectedUpdate={this.selectedUpdate.bind(this)}

                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
              data={this.props.data} 
              selectedBuilding={this.state.selectedBuilding} 
              />
              <RemoveBuilding
              data={this.RemoveBuilding}
              removeBuilding = {this.removeBuilding.bind(this)}
              selectedBuilding = {this.state.selectedBuilding}
              />
              <br></br>
              <br></br>
              <br></br>

              <AddBuilding
                data={this.props.data}
                handleSubmit={this.handleSubmit.bind(this)}
                newBuild = {this.state.newBuild}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
