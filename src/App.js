import React from 'react';
import Tabbar from "./components/Tabbar"
import Header from "./components/header"
import "./index.css"
import store from './Redux';
class App extends React.Component{
state={
  isShow:true
}
  componentWillMount(){
    //订阅者
    store.subscribe(()=>{
      //  console.log("store被修改",store.getState())
      this.setState({
        isShow:store.getState().isTabbar
      })
    })
  }
  render(){
    return(
      <div>
        <Header/>
        {
          this.props.children
        }
        {
          this.state.isShow?<Tabbar/>:null
        }
        
      </div>
    )
  }
}
export default App;