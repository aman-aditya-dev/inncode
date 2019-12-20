import React, { Component } from 'react';
import './App.scss';
import routes from './routes';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './configureStore';
import Header from './components/common/header/header';
import $ from 'jquery';
import AmanResume from './components/landing-page/amanResume';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      hiddenInput:'initial'
    }
  }
  componentDidMount(){
    // let hiddenInput = this.state.hiddenInput;
    // document.addEventListener("keydown", this._handleKeydown, false);
  // $(document).bind("contextmenu",function(e) { 
  //   e.preventDefault();
   
  // });
  }
  // _handleKeydown=(e)=>{
  //   console.log(e.key);
  //   if(e.key==="`"){
  //     this.setState({hiddenInput: ""})
  //   }
  //   else{
  //       this.setState({hiddenInput: this.state.hiddenInput+e.key})
  //   }
  // }
  render() {
   //   console.log(this.state.hiddenInput);
    // if(this.state.hiddenInput === "l0veIndia"){
        
    // } 
    return (
        <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
          <Header />
            <div className="wrap">
              {routes}
            </div>
            {/* <AmanResume /> */}
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
