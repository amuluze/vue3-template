/**
 * @Author     : Amu
 * @Date       : 2024/11/12 19:35
 * @Description:
 */
import type { AxiosInstance } from 'axios'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const axiosInstance: AxiosInstance = axios.create()

const mock = new MockAdapter(axiosInstance)

mock.onPost('/api/login').reply(204)
