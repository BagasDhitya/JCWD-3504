'use client'
import Cookie from 'js-cookie'

export function setProfile(email: string) {
    Cookie.set('email', email, { expires: 7 })
}

export function getProfile() {
    return Cookie.get('email')
}

export function removeProfile() {
    return Cookie.remove('email')
}