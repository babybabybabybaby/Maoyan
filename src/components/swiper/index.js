import React from "react"
import Swiper from "swiper"
import "../../../node_modules/swiper/css/swiper.css"

class mySwiper extends React.Component {
    render() {
        return (
            <div className="swiper-container playSwiper">
                <div className="swiper-wrapper">
                    {
                        this.props.children
                    }
                </div>
                {/* <!-- Add Pagination --> */}
                {/* <div className="swiper-pagination"></div> */}
            </div>
        )
    }
    componentDidMount() {
        new Swiper(".playSwiper", {
            slidesPerView: 4,
            spaceBetween:30,
            // pagination: {
            //     el: ".swiper-pagination"
            // },
            loop:false
        })
    }
}
export default mySwiper;