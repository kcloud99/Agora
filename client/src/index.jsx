import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar.jsx';
import ProjectList from './components/projectList.jsx';
import Navbar from './components/navbar.jsx';
import AddProject from './components/addProject.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [


      ]
    }
  }
  displayInfo() {
    if (currentInfo === a) {

    }
    return <ProjectList/>
    return <CustomerInfo/>
  }


  componentDidMount() {
    fetch('/projects')
    .then((projects) => projects.json())
    .then((projects) => this.setState({projects}));
  }

  render () {
    const mainDivStyles = {
      padding: '50px'
    }
    return (
      <div className="container-fluid">
        <div>
          <Navbar />
        </div>
        <div className="row" style={mainDivStyles}>
          <Sidebar />
          <div className="col-sm-9">
            <AddProject />
            <ProjectList projects={this.state.projects}/>
          </div>
        </div>
      </div>
    )
  }


}

ReactDOM.render(<App />, document.getElementById('app'));