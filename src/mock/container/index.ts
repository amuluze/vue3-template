/**
 * @Author     : Amu
 * @Date       : 2024/11/24 13:03
 * @Description:
 */
import request from '@/mock'
import type { ContainerQueryResult, DockerInfo, ImageQueryResult, NetworkQueryResult } from '@/interface/container'

export async function queryDockerInfo() {
    return request.get<DockerInfo>('/api/v1/container/version', {})
}

export async function queryContainers() {
    return request.get<ContainerQueryResult>('/api/v1/container/containers', {})
}

export async function queryImages() {
    return request.get<ImageQueryResult>('/api/v1/container/images', {})
}

export async function queryNetworks() {
    return request.get<NetworkQueryResult>('/api/v1/container/networks', {})
}
