import React from "react"
import Axios from "axios"
import css from "./index.module.scss"
class Cinema extends React.Component{
    componentDidMount(){
        Axios("/ajax/cinemaList?day=2019-09-29&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1569727561438&cityId=65").then(res=>{
            console.log(res.data.cinemas)
            this.setState({
                datalist:res.data.cinemas
            })
        })
    }
    state={
        datalist:[]
    }
    render(){
        return (
            <ul>
                <div style={{height:".5rem"}}></div>
                cinema
                {
                    this.state.datalist.map(item=>
                        <li key={item.id} className={css.libo}>
                            <h3 className={css.ellipsis}>{item.nm}<span>{item.sellPrice}元起</span></h3>
                            <p className={css.boxFix}>{item.addr}</p>
                            <span className={css.relative}>{item.distance}</span>

                        </li>
                    )
                }

            </ul>
        )
    }
}

export default Cinema;