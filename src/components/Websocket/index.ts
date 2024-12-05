/**
 * @Author     : Amu
 * @Date       : 2024/11/20 19:21
 * @Description:
 */
/**
 * Websocket 封装
 * @ url： 请求地址       类型： string     默认： ''      备注： 'web/msg'
 */
import ReconnectingWebSocket from 'reconnecting-websocket'

class CustomReconnectingWebSocket extends ReconnectingWebSocket {
    constructor(url: string, protocols?: string | string[], options?: any) {
        const location: Location = window.location
        const uri = `${location.host}/${url}`
        url = /https/.test(location.protocol) ? `wss://${uri}` : `ws://${uri}`
        super(url, protocols, {
            ...options,
            connectionTimeout: 1000,
            maxRetries: 10,
        })

        this.onopen = (event): void => {
            console.log('websocket open', event)
        }
        this.onclose = (event) => {
            console.log('websocket close', event)
        }
        this.onmessage = (event) => {
            console.log('websocket message', event)
        }
        this.onerror = (event) => {
            console.log('websocket error', event)
        }
    }
}

export default CustomReconnectingWebSocket
