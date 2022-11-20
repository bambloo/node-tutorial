export class Mutex<type> {
    obj: type
    wlist: (() => void)[] = []
    occupied = false
    constructor(obj: any) {
        this.obj = obj
    }

    do(callback: (obj: type) => Promise<any> | any) {
        return new Promise<void>((resolve, reject) => {
            if (this.occupied) {
                this.wlist.push(resolve)
            } else {
                this.occupied = true
                resolve()
            }
        })
        .then(() => {
            return Promise.resolve()
            .then(() => {
                return callback(this.obj)
            })
            .finally(() => {
                var clbk = this.wlist.shift()
                if (clbk) {
                    clbk()
                } else {
                    this.occupied = false
                }
            })
        })
    }
}