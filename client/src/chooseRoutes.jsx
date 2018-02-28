import React from 'react';
import ReactDOM from 'react-dom';
import App from './index.jsx';

class ChooseRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  componentWillMount () {
    fetch('/')
    .then(res => res.json())
    .then(res => this.setState({isAuthenticated}));
  }

  render() {
    if (this.state.isAuthenticated) {
      return (<div><Navbar /><App /></div>);
    } else {
      return (<div><Navbar /><SplashPage /></div>);
    }
    // return(
    //   <div>
    //     <Navbar />
    //     <Route>
    //       <App />
    //       <SplashPage />
    //     </Route>
    //   </div>
    // )
  }
}
ReactDOM.render((
  <BrowserRouter>
    <ChooseRoute />
  </BrowserRouter>
  ), document.getElementById('app'));