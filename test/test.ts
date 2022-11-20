import { Mutex } from "../src/mutex";

var mutext = new Mutex<string>('Hello')
mutext.do(obj => {
    console.log(obj)
})

mutext.do(obj => {
    console.log(obj)
})