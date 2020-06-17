export const Save = (isDark) => {
    if (typeof window !== 'undefined') {
        const theme = isDark ? 'dark' : 'light'
        console.log(isDark);
        window.localStorage.setItem('theme', theme)
    }
}

export const Get = () => {
    if (typeof window !== 'undefined') {
        const theme = window.localStorage.getItem('theme')
        return theme === 'dark' ? true : false
    } else {
        return false;
    }
}

export default { Save, Get };