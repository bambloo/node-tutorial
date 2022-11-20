import { Socket, Server}  from 'net'
import { Duplex } from 'stream'
import { NotEmittedStatement } from 'typescript'

class SocketDuplex implements Duplex {
    writable: boolean
    writableEnded: boolean
    writableFinished: boolean
    writableHighWaterMark: number
    writableLength: number
    writableObjectMode: boolean
    writableCorked: number
    writableNeedDrain: boolean
    closed: boolean
    errored: Error | null
    allowHalfOpen: boolean

    socket : Socket

    constructor(socket: Socket) {
        this.writable = socket.writable
        this.writableEnded = socket.writableEnded
        this.writableFinished = socket.writableFinished
        this.writableHighWaterMark = socket.writableHighWaterMark
        this.writableLength = socket.writableLength
        this.writableObjectMode = socket.writableObjectMode
        this.writableCorked = socket.writableCorked
        this.writableNeedDrain = socket.writableNeedDrain
        this.closed = socket.closed
        this.errored = socket.errored
        this.allowHalfOpen = socket.allowHalfOpen

        this.readableAborted = socket.readableAborted
        this.readable = socket.readable
        this.readableDidRead = socket.readableDidRead
        this.readableEncoding = socket.readableEncoding
        this.readableEnded = socket.readableEnded
        this.readableFlowing = socket.readableFlowing
        this.readableHighWaterMark = socket.readableHighWaterMark
        this.readableLength = socket.readableLength
        this.readableObjectMode = socket.readableObjectMode
        this.destroyed = socket.destroyed

        this.socket = socket
    }

    _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null | undefined) => void): void {
        throw new Error('Method not implemented.')
    }
    _writev?(chunks: { chunk: any; encoding: BufferEncoding }[], callback: (error?: Error | null | undefined) => void): void {
        throw new Error('Method not implemented.')
    }
    _destroy(error: Error | null, callback: (error: Error | null) => void): void {
        throw new Error('Method not implemented.')
    }
    _final(callback: (error?: Error | null | undefined) => void): void {
        throw new Error('Method not implemented.')
    }
    write(chunk: any, encoding?: BufferEncoding | undefined, cb?: ((error: Error | null | undefined) => void) | undefined): boolean
    write(chunk: any, cb?: ((error: Error | null | undefined) => void) | undefined): boolean
    write(chunk: unknown, encoding?: unknown, cb?: unknown): boolean {
        throw new Error('Method not implemented.')
    }
    setDefaultEncoding(encoding: BufferEncoding): this {
        throw new Error('Method not implemented.')
    }
    end(cb?: (() => void) | undefined): this
    end(chunk: any, cb?: (() => void) | undefined): this
    end(chunk: any, encoding?: BufferEncoding | undefined, cb?: (() => void) | undefined): this
    end(chunk?: unknown, encoding?: unknown, cb?: unknown): this {
        throw new Error('Method not implemented.')
    }
    cork(): void {
        throw new Error('Method not implemented.')
    }
    uncork(): void {
        throw new Error('Method not implemented.')
    }
    readableAborted: boolean
    readable: boolean
    readableDidRead: boolean
    readableEncoding: BufferEncoding | null
    readableEnded: boolean
    readableFlowing: boolean | null
    readableHighWaterMark: number
    readableLength: number
    readableObjectMode: boolean
    destroyed: boolean
    _construct?(callback: (error?: Error | null | undefined) => void): void {
        throw new Error('Method not implemented.')
    }
    _read(size: number): void {
        throw new Error('Method not implemented.')
    }
    read(size?: number | undefined) {
        throw new Error('Method not implemented.')
    }
    setEncoding(encoding: BufferEncoding): this {
        throw new Error('Method not implemented.')
    }
    pause(): this {
        throw new Error('Method not implemented.')
    }
    resume(): this {
        throw new Error('Method not implemented.')
    }
    isPaused(): boolean {
        throw new Error('Method not implemented.')
    }
    unpipe(destination?: NodeJS.WritableStream | undefined): this {
        throw new Error('Method not implemented.')
    }
    unshift(chunk: any, encoding?: BufferEncoding | undefined): void {
        throw new Error('Method not implemented.')
    }
    wrap(stream: NodeJS.ReadableStream): this {
        throw new Error('Method not implemented.')
    }
    push(chunk: any, encoding?: BufferEncoding | undefined): boolean {
        throw new Error('Method not implemented.')
    }
    destroy(error?: Error | undefined): this {
        throw new Error('Method not implemented.')
    }
    addListener(event: 'close', listener: () => void): this
    addListener(event: 'data', listener: (chunk: any) => void): this
    addListener(event: 'end', listener: () => void): this
    addListener(event: 'error', listener: (err: Error) => void): this
    addListener(event: 'pause', listener: () => void): this
    addListener(event: 'readable', listener: () => void): this
    addListener(event: 'resume', listener: () => void): this
    addListener(event: string | symbol, listener: (...args: any[]) => void): this
    addListener(event: unknown, listener: unknown): this {
        throw new Error('Method not implemented.')
    }
    emit(event: 'close'): boolean
    emit(event: 'data', chunk: any): boolean
    emit(event: 'end'): boolean
    emit(event: 'error', err: Error): boolean
    emit(event: 'pause'): boolean
    emit(event: 'readable'): boolean
    emit(event: 'resume'): boolean
    emit(event: string | symbol, ...args: any[]): boolean
    emit(event: unknown, err?: unknown, ...rest: unknown[]): boolean {
        throw new Error('Method not implemented.')
    }
    on(event: 'close', listener: () => void): this
    on(event: 'data', listener: (chunk: any) => void): this
    on(event: 'end', listener: () => void): this
    on(event: 'error', listener: (err: Error) => void): this
    on(event: 'pause', listener: () => void): this
    on(event: 'readable', listener: () => void): this
    on(event: 'resume', listener: () => void): this
    on(event: string | symbol, listener: (...args: any[]) => void): this
    on(event: unknown, listener: unknown): this {
        switch(event) {
            case 'data':
                this.socket.on('data', listener as (data: Buffer) => void)
                break
            default:
                throw new Error('Method not implemented.')
        }
        return this        
    }
    once(event: 'close', listener: () => void): this
    once(event: 'data', listener: (chunk: any) => void): this
    once(event: 'end', listener: () => void): this
    once(event: 'error', listener: (err: Error) => void): this
    once(event: 'pause', listener: () => void): this
    once(event: 'readable', listener: () => void): this
    once(event: 'resume', listener: () => void): this
    once(event: string | symbol, listener: (...args: any[]) => void): this
    once(event: unknown, listener: unknown): this {
        throw new Error('Method not implemented.')
    }
    prependListener(event: 'close', listener: () => void): this
    prependListener(event: 'data', listener: (chunk: any) => void): this
    prependListener(event: 'end', listener: () => void): this
    prependListener(event: 'error', listener: (err: Error) => void): this
    prependListener(event: 'pause', listener: () => void): this
    prependListener(event: 'readable', listener: () => void): this
    prependListener(event: 'resume', listener: () => void): this
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this
    prependListener(event: unknown, listener: unknown): this {
        throw new Error('Method not implemented.')
    }
    prependOnceListener(event: 'close', listener: () => void): this
    prependOnceListener(event: 'data', listener: (chunk: any) => void): this
    prependOnceListener(event: 'end', listener: () => void): this
    prependOnceListener(event: 'error', listener: (err: Error) => void): this
    prependOnceListener(event: 'pause', listener: () => void): this
    prependOnceListener(event: 'readable', listener: () => void): this
    prependOnceListener(event: 'resume', listener: () => void): this
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
    prependOnceListener(event: unknown, listener: unknown): this {
        throw new Error('Method not implemented.')
    }
    removeListener(event: 'close', listener: () => void): this
    removeListener(event: 'data', listener: (chunk: any) => void): this
    removeListener(event: 'end', listener: () => void): this
    removeListener(event: 'error', listener: (err: Error) => void): this
    removeListener(event: 'pause', listener: () => void): this
    removeListener(event: 'readable', listener: () => void): this
    removeListener(event: 'resume', listener: () => void): this
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this
    removeListener(event: unknown, listener: unknown): this {
        throw new Error('Method not implemented.')
    }
    [Symbol.asyncIterator](): AsyncIterableIterator<any> {
        throw new Error('Method not implemented.')
    }
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean | undefined } | undefined): T {
        throw new Error('Method not implemented.')
    }
    off(eventName: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error('Method not implemented.')
    }
    removeAllListeners(event?: string | symbol | undefined): this {
        throw new Error('Method not implemented.')
    }
    setMaxListeners(n: number): this {
        throw new Error('Method not implemented.')
    }
    getMaxListeners(): number {
        throw new Error('Method not implemented.')
    }
    listeners(eventName: string | symbol): Function[] {
        throw new Error('Method not implemented.')
    }
    rawListeners(eventName: string | symbol): Function[] {
        throw new Error('Method not implemented.')
    }
    listenerCount(eventName: string | symbol): number {
        throw new Error('Method not implemented.')
    }
    eventNames(): (string | symbol)[] {
        throw new Error('Method not implemented.')
    }

}

var server = new Server(socket => {
    var duplex = new SocketDuplex(socket)
    duplex.on('data', data => {
        console.log(data.toString())
    })
})

server.listen(8000)
server.on('connection', conn => {
    console.log(conn)
})

var socket = new Socket()
socket.connect({
    host: '127.0.0.1',
    port: 8000
})
.on('connect', () => {
    socket.write('hello')
})
.on('error', err => [
    console.log("" + err)
])
