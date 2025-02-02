/**
 * @Author     : Amu
 * @Date       : 2024/11/5 16:47
 * @Description: ElMessage ElMessageBox 找不到的问题 https://blog.csdn.net/weixin_59916662/article/details/127334196
 */

export function message(msg: string): void {
    ElMessage({ showClose: true, dangerouslyUseHTMLString: true, message: msg })
}

/**
 * 成功提示
 * @param msg 提示信息
 */
export function success(msg: string): void {
    ElMessage({ showClose: true, dangerouslyUseHTMLString: true, message: msg, type: 'success' })
}

/**
 * 消息提示
 * @param msg 提示信息
 */
export function info(msg: string): void {
    ElMessage({ showClose: true, dangerouslyUseHTMLString: true, message: msg, type: 'info' })
}

/**
 * 警告提示
 * @param msg 提示信息
 */
export function warning(msg: string): void {
    ElMessage({ showClose: true, dangerouslyUseHTMLString: true, message: msg, type: 'warning' })
}

/**
 * 错误提示
 * @param msg 提示信息
 */
export function error(msg: string): void {
    ElMessage({ showClose: true, dangerouslyUseHTMLString: true, message: msg, type: 'error' })
}

/**
 * confirm 提示框
 * @param title 标题
 * @param msg 信息
 * @param ok ok函数
 * @param okText ok按钮文字
 * @param cancel 取消函数
 * @param cText cancel按钮文字
 */
export async function confirm(title: string, msg: string, ok: any, okText: string, cancel: any, cText: string) {
    await ElMessageBox.confirm(msg, title || '提示', { confirmButtonText: okText || '确定', cancelButtonText: cText || '取消', draggable: true })
        .then(ok || (() => {
        }))
        .catch(cancel || (() => {
        }))
}
