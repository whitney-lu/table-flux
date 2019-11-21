import { EventEmitter } from 'events'

const store = Object.assign({},EventEmitter.prototype,{
    list:[
        {
            name:'张三',
            content:"真好"
        }
    ],
    getList(){
        return this.list;
    },
    addList(obj){
        this.list.push(obj)
        this.emitAdd()
    },
    addListen(callback){
        this.on('add',callback)
    },
    emitAdd(){
        this.emit("add")
    },
    delOne(i){
        console.log(i)
        this.list.splice(i,1)
        this.emitAdd()
    }
})
export default store;
