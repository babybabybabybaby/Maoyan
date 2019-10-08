import React from "react"
import { HashRouter, Route, Redirect, Switch } from "react-router-dom"
import Film from "../views/film"
import App from "../App"
import Center from "../views/center"
import Cinema from "../views/cinema"
import Detail from "../views/detail"
//HashRouter是路由根组件，要套在最外面，，
//App是所有组件的根组件，
//Route组件会根据 path=“/”的路径，去渲染对应的组件到App留好的插槽中，
//Switch是阻止匹配到了还继续往下匹配，【放在一级路由外】
const router = (
    <HashRouter>
        <App>
            <Switch>
                <Route path="/film" component={Film} />
                <Route path="/center" component={Center}/>
                <Route path="/cinema" component={Cinema} />
                <Route path="/detail/:myid" component={Detail}/>
                <Redirect from="/" to="/film" />

            </Switch>
        </App>
    </HashRouter>
)

export default router;