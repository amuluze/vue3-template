/**
 * @Author     : Amu
 * @Date       : 2024/11/12 19:35
 * @Description:
 */
import type { AxiosInstance } from 'axios'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const service: AxiosInstance = axios.create()

// ? https://github.com/axios/axios/issues/6692 注意 ts 5.5.4 + axios 1.7.7 的版本组合
const mock = new MockAdapter(service, { delayResponse: 2000 })

mock.onPost('/api/login').reply(204)

mock.onGet('/api/users', {}).reply(200, { data: [
    { id: 1, username: 'John 1', remark: 'admin', is_admin: 0, status: 1, created_at: new Date().toISOString() },
    { id: 1, username: 'John 2', remark: 'admin', is_admin: 0, status: 1, created_at: new Date().toISOString() },
    { id: 1, username: 'John 3', remark: 'admin', is_admin: 0, status: 1, created_at: new Date().toISOString() },
    { id: 1, username: 'John 4', remark: 'admin', is_admin: 0, status: 1, created_at: new Date().toISOString() },
    { id: 1, username: 'John 5', remark: 'admin', is_admin: 0, status: 1, created_at: new Date().toISOString() },
    { id: 1, username: 'John 6', remark: 'admin', is_admin: 0, status: 1, created_at: new Date().toISOString() },
    { id: 1, username: 'John 7', remark: 'admin', is_admin: 0, status: 1, created_at: new Date().toISOString() },
    { id: 1, username: 'John 8', remark: 'admin', is_admin: 0, status: 1, created_at: new Date().toISOString() },
    { id: 1, username: 'John 9', remark: 'admin', is_admin: 0, status: 1, created_at: new Date().toISOString() },
    { id: 1, username: 'John 10', remark: 'admin', is_admin: 0, status: 1, created_at: new Date().toISOString() },
],
})

export default service
