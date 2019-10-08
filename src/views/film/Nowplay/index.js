import React from "react"
import Axios from "axios"
import style from "./index.module.scss"
import {withRouter} from "react-router"
class Nowplay extends React.Component {
    state = {
        nowlist: []
    }
    componentDidMount() {
        Axios("/ajax/movieOnInfoList?token=").then(res => {
           
            this.setState({
                nowlist: res.data.movieList
            })
        })
    }
    render() {
        return (
            <ul>
                <div></div>
                {
                    this.state.nowlist.map(item =>
                        <li key={item.id} className={style.main} onClick={this.handeClick.bind(this,item.id)}>
                            <img src={item.img.replace("w.h", "64.90")} />
                            <div className={style.wrapper}>
                                <h3>{item.nm}</h3>
                                <div className={style.detail}>
                                    <p><span>观众评 </span><span className={style.sc}> {item.sc}</span></p>
                                    <p>主演:{item.star}</p>
                                    <p>{item.showInfo}</p>
                                </div>
                                <div className={style.btn}>购票</div>
                            </div>
                        </li>
                    )
                }
            </ul>
        )
    }
    handeClick(id){
        this.props.history.push(`/detail/${id}`)
        
        
    }
}

export default withRouter(Nowplay);