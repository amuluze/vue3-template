/**
 * @Author     : Amu
 * @Date       : 2024/11/10 23:57
 * @Description:
 */

/**
 * @description 获取浏览器默认语言
 */
export function getBrowserLang() {
    const browserLang = navigator.language
    let defaultBrowserLang: string
    if (['cn', 'zh', 'zh-cn'].includes(browserLang.toLowerCase())) {
        defaultBrowserLang = 'zh'
    }
    else {
        defaultBrowserLang = 'en'
    }
    return defaultBrowserLang
}

/**
 * @description 生成唯一 uuid
 */
export function generateUUID() {
    let uuid = ''
    for (let i = 0; i < 32; i++) {
        const random = (Math.random() * 16) | 0
        if (i === 8 || i === 12 || i === 16 || i === 20)
            uuid += '-'
        uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16)
    }
    return uuid
}

/**
 * @description 获取当前时间对应的提示语
 */
export function getTimeState() {
    const timeNow = new Date()
    const hours = timeNow.getHours()
    if (hours >= 6 && hours <= 10)
        return `早上好 ⛅`
    if (hours >= 10 && hours <= 14)
        return `中午好 🌞`
    if (hours >= 14 && hours <= 18)
        return `下午好 🌞`
    if (hours >= 18 && hours <= 24)
        return `晚上好 🌛`
    if (hours >= 0 && hours <= 6)
        return `凌晨好 🌛`
}
