export const Save = (isDark) => {
    if (typeof window !== 'undefined') {
        const theme = isDark ? 'dark' : 'light'
        window.localStorage.setItem('theme', theme)
    }
}

export const Get = () => {
    if (typeof window !== 'undefined') {
        const theme = window.localStorage.getItem('theme')
        return theme !== 'light' ? false : true
    } else {
        return false;
    }
}

export default { Save, Get };