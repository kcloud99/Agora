import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar.jsx';
import ProjectList from './components/projectList.jsx';
import Navbar from './components/navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
      {
      }
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
    return (
      <div className="container-fluid">
        <div>
          <Navbar />
        </div>
        <div className="row">
          <Sidebar />
          <div>
            <ProjectList projects={this.state.projects}/>
          </div>
        </div>
      </div>
    )
  }


}

ReactDOM.render(<App />, document.getElementById('app'));