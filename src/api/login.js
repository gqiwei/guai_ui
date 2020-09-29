import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

export function getCode() {
    return request({
        url: '/loginCode',
        method: 'get'
    })
}

export function getUserInfo() {
    return request({
        url: '/userInfo',
        method: 'get'
    })
}

