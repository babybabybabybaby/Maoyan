import { createStore } from "redux"
//唯一修改状态的地方，但不能直接修改，要接受老状态，返回心状态
const reducer = (prevState = {  //接受默认参数的方法
    isTabbar: false,
    datalist: []
}, action) => {
    // console.log(action);
    let {type,payload}=action;
    let newState={...prevState}
    switch(type){
        case "showTabbar":
            newState.isTabbar=payload
            return newState
        case "hideTabbar":
                newState.isTabbar=payload
                return newState
        default:
            return newState
    }
    // return prevState;
}

const store = createStore(reducer);
export default store;

//调度中心