import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects = [];
    }
  }

  render () {
    return (
      <div>
        <div id="navbar">
          <h1>AGORA</h1>
        </div>
        <Sidebar />
        <ProjectList projects="this.state.projects"/>
      </div>
    )
  }


}

ReactDOM.render(<App />, document.getElementById(''))