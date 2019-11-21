import { Dispatcher } from 'flux'
import store from './store'
const buttonDispatch = new Dispatcher()
buttonDispatch.register((action) => {
    switch (action.actionType) {
        case 'ADD':
            store.addList(action.data)
            break;
        case 'DEL':
            store.delOne(action.data)
            break;
    }
})
export default buttonDispatch;