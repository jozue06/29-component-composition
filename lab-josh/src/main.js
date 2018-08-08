import React from 'react';
import ReactDOM from 'react-dom';
import Style from './components/style/styles.js';
import Header from './components/app/header.js'
import Footer from './components/app/footer.js'


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Landing from './components/landing/index.js';
import Dashboard from './components/dashboard/index.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Notes N Stuff'
    };
  }

  render() {
    return <Router>
      <main>
      <Header />
      <Style.Wrapper>
      <div>
        <nav>
          <ul>
          <Style.Text><li><Link to="/">Landing</Link></li></Style.Text>
            <Style.Text> <li><Link to="/dashboard">Dashboard</Link></li></Style.Text>
          </ul>
        </nav>
        <Style.Title>{this.state.title}</Style.Title>
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />


      </div>
      </Style.Wrapper>
      </main>
      
    </Router>;
      <Footer />
  }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);

export default App;