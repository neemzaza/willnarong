import './main.css';
import wprofile from './willnarongman.jpg';
import logo from './logo.svg';
import { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

import Discover from './Discover';
import MePost from './MePost';
import Mark from './Mark';
import About from './About';
import Report from './Report';
// import $ from 'jquery';

const discover = () => {
  return <Discover />
}

const mepost = () => {
  return <MePost />
}

const mark = () => {
  return <Mark />
}

const about = () => {
  return <About />
}

const report = () => {
  return <Report />
}

const user = "Airwavy"

class App extends Component {
  componentDidMount() {
    var upScroll = window.pageYOffset
    window.onscroll = () => {
      var downScroll = window.pageYOffset
      if (upScroll >! downScroll) {
        var title = document.getElementById("titlenavbar")
        title.classList.add("animate__bounceIn")
        title.innerHTML = "Main Page"
      } 
      upScroll = downScroll
    }
    
    
  }
  render() {
    return (
      <>
        <nav id="navbaryellow" class="navbar navbar-expand-sm fixed-top navbar-light bgwillnarong">
          <div class="container-fluid">
            <a class="flex logowill navbar-brand" href="/Discover"><img src={logo} class="logoimg" alt="WiewShare"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
              aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarID">
              <div class="navbar-nav">
                <a id="titlenavbar" class="nav-link bold active animate" aria-current="page" href="/Discover">WiewShare</a>
              </div>
            </div>
          </div>
        </nav>
        <Router>
          <div>
        <div class="content">
          <div class="sidebar">
            
                <div class="menulink">

                <h5><NavLink to="/Discover" activeClassName="here" exact={true}><i class="bi bi-binoculars"></i>&nbsp;Discover</NavLink></h5>
                <h5><NavLink to="/MePost" activeClassName="here"><i class="bi bi-file-earmark-post"></i>&nbsp;Your Post</NavLink></h5>
                <h5><NavLink to="/Mark" activeClassName="here"><i class="bi bi-geo"></i>&nbsp;Marked Story</NavLink></h5>
                <h5><NavLink to="/About" activeClassName="here"><i class="bi bi-info-square"></i>&nbsp;About this web</NavLink></h5>
                <h5><NavLink to="/Report" activeClassName="here"><i class="bi bi-bug"></i>&nbsp;Report</NavLink></h5>
                </div>
                <div class="profilesidebar">
                  <img src={wprofile} class="profile" alt="Profile"/>
                  <p>&nbsp;&nbsp;&nbsp;{user}</p>
                </div>

              </div>

                <div class="inbody page">
                  <Switch>
                    <Route path="/" exact={true} component={discover}/>
                    <Route path="/Discover" exact={true} component={discover}/>
                    <Route path="/MePost" component={mepost} />
                    <Route path="/Mark" component={mark} />
                    <Route path="/About" component={about} />
                    <Route path="/Report" component={report} />
                  </Switch>
                </div>

              </div>
              </div>
            </Router>
      </>
    );
  }
}


export default App;
