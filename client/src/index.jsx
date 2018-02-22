import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Sidebar from './components/sidebar.jsx';
import ProjectList from './components/projectList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
      {
        name: 'Bill',
        description: 'Fix car'
      }
      ]
    }
  }

  componentDidMount() {
    fetch('/projects')
    .then((projects) => projects.json())
    .then((projects) => this.setState({projects}));
  }

  render () {
    return (
      <div>
        <div id="navbar">
          <h1>AGORA</h1>
        </div>
        <Sidebar />
        <ProjectList projects={this.state.projects}/>
      </div>
    )
  }


}

ReactDOM.render(<App />, document.getElementById('app'));