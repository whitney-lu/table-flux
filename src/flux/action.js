import buttonDispatch from './dispatch'
const action = {
    addList(obj){
        buttonDispatch.dispatch({
            actionType:'ADD',
            data:obj
        })
    },
    delOne(i){
        buttonDispatch.dispatch({
            actionType:'DEL',
            data:i
        })
    }
}
export default action;