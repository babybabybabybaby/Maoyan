import React from "react"
import { NavLink } from "react-router-dom"
import style from "./index.module.scss"
class Tabbar extends React.Component {
    render() {
        return (
            <ul className={style.Tabbar}>
                <li><NavLink to="/film" activeClassName={style.active}>电影</NavLink></li>
                <li><NavLink to="/cinema" activeClassName={style.active}>影院</NavLink></li>
                <li><NavLink to=" " activeClassName={style.active} onClick={this.handeClick}>我的</NavLink></li>
            </ul>
        )
    }
    handeClick(){
        window.location.href = 'https://i.meituan.com/account/login?nodown=1&backurl=http%3A%2F%2Fm.maoyan.com%2FmyCenter%3F%24from%3Dcanary#'
    }

}
export default Tabbar;