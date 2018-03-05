import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar.jsx';
import ProjectList from './components/projectList.jsx';
import Navbar from './components/navbar.jsx';
import AddProject from './components/addProject.jsx';
import Workspace from './components/workspace.jsx';
import Timeline from './components/timeline.jsx';
import FinanceView from './components/financeview.jsx';
import ResourceView from './components/resources.jsx';

import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      currentProject: {},
    }
  }
  //// I DONT KNOW WHY THIS IS HERE
  displayInfo() {
    if (currentInfo === a) {

    }
    return <ProjectList/>
    return <CustomerInfo/>
  }

  setCurrentProject(project) {
    this.setState({currentProject: project});
  }

  // componentDidMount() {
  //   fetch('/projects')
  //   .then((projects) => projects.json())
  //   .then((projects) => this.setState({projects}))
  //   .then((projects) => this.setState({currentProject: this.state.projects[0]}));
  // }

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
          <Route exact path="/" render={(props) => (
              <ProjectList {...props} projects={this.state.projects}/>
            )}/>
          <Route path="/addProject" render={(props) => (
              <AddProject {...props} action={this.componentDidMount.bind(this)}/>
            )}/>
          <Route path="/allProjects" render={(props) => (
              <ProjectList {...props} projects={this.state.projects}/>
            )}/>
          <Route path="/workspace" render={(props)=>(
              <Workspace {...props} project={this.state.currentProject}/>
            )}/>
          <Route path="/timeline" render={(props) => (
              <Timeline {...props} project={this.state.currentProject}/>
            )}/>
          <Route path="/finance" render={(props) => (
              <FinanceView {...props} project={this.state.currentProject}/>
            )}/>
          <Route path="/resources" render={(props) => (
              <ResourceView {...props} project={this.state.currentProject}/>
            )}/>
          </div>
        </div>
      </div>
    )
  }


}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('app'));