import React from "react"
import Axios from "axios"
import style from "./index.module.scss"
import store from "../../Redux"
class Detail extends React.Component {
    state = {
        detailList:null
    }
    componentWillUnmount(){
        store.dispatch({
            //tabbar---显示
            type:"showTabbar",
            payload:true
        })
    }
    componentDidMount() {
        //发布者---tabbar 隐藏
        store.dispatch({
            type:"hideTabbar",
            payload:false
        })//参数对象，就是action


        Axios(`/ajax/detailmovie?movieId=${this.props.match.params.myid}`).then(res =>{
            this.setState({
                detailList: res.data.detailMovie, 
            })
        })
    }
    render() {
    let list=this.state.detailList
    return (

            <div>
                <div className={style.i} >
                <span onClick={this.handeClick.bind(this)} className={style.ico}>‹</span>
                <span className={style.tetle}>
                {this.state.detailList?this.state.detailList.nm:null}
                </span>
                </div>
                <div style={{height:".5rem"}}></div>
                {
               this.state.detailList?<div>
                        <img src={list.img.replace("w.h","128.180")} alt={list.nm} />
                        {list.nm}
                    </div>:null
                       
                }
               
            </div>
        )
    }
    handeClick(){
        this.props.history.go(-1)
    }
}

export default Detail;