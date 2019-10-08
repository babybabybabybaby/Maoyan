import React from "react"
import Swiper from "../../../components/swiper"
import Axios from "axios"
import style from "./index.module.scss"
class Comingsoon extends React.Component {
    state = {
        swiperList: [],
        list:[],
        datalist:['111','2222','3333','444'],
    }
    componentDidMount() {
       
        Axios("/ajax/mostExpected?ci=20&limit=10&offset=0&token=").then(res => {
            // console.log(res.data.coming)
            this.setState({
                swiperList: res.data.coming
            })
        })
        Axios("/ajax/comingList?ci=65&token=&limit=10").then(res=>{
        this.setState({
            
            list:res.data.coming
        })
        })
    }
    render() {
        return (
            <ul className={style.swiper}>

                <p className={style.tetle}>近期最受期待</p>
                <Swiper key={this.state.swiperList.length}>
                    {
                        this.state.swiperList.map(item =>
                            <li className="swiper-slide" key={item.id}>
                                <img src={item.img.replace("w.h", "85.115")} />
                                <h4>{item.nm}</h4>
                                <p className={style.time}>{item.comingTitle.slice(0, 6)}</p>
                            </li>
                        )
                    }
                </Swiper>
                <div className={style.bound}></div>
                <div>
                    <ul>
                        {
                            this.state.list.map(item =>
                                <li key={item.id} onClick={this.handeClick.bind(this,item.id)}  className={style.main}>
                                    <img src={item.img.replace("w.h", "64.90")} />
                            <div className={style.wrapper}>
                                <h3>{item.nm}</h3>
                                <div className={style.detail}>
                                    <p><span className={style.sc}> {item.wish}</span><span>人想看</span></p>
                                    <p>主演:{item.star}</p>
                                    <p>{item.showInfo}</p>
                                </div>
                                <div className={style.btn}>预售</div>
                            </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </ul>
        )
    }
    handeClick(id){
        this.props.history.push(`/detail/${id}`)
        
    }
}

export default Comingsoon;