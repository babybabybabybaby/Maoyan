import React from "react"
import {Route,Switch,Redirect} from "react-router-dom"
import Comingsoon from "./comingsoon"
import Nowplay from "./Nowplay"
import FilmHead from "./filmHead"
class Film extends React.Component{
    render(){
        return (
            <div>
                <div style={{height:"1rem"}}></div>
                <FilmHead/>
                <Switch>
                    <Route path="/film/comingsoon" component={Comingsoon}/>
                    <Route path="/film/nowplay" component={Nowplay}/>
                    <Redirect from="/film" to="/film/nowplay"/>
                </Switch>
            </div>
        )
    }
}

export default Film;