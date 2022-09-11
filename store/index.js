export const state = () => ({
    sidebar: false,
    links: [
        {
            text: 'Home',
            tag: '#home',
        },
        {
            text: 'About me',
            tag: '#about',
        },
        {
            text: 'Services',
            tag: '#services',
        },
        {
            text: 'My works',
            tag: '#works',
        },
        {
            text: 'Contact me',
            tag: '#contact',
        },
    ],
    activeTag: '#home'
})

export const getters = {
    getSidebar: state => state.sidebar,
    getLinks: state => state.links,
    getActiveTag: state => state.activeTag,
}

export const mutations = {
    openSidebar: state => state.sidebar = true,
    closeSidebar: state => state.sidebar = false,
    toggleSidebar: state => state.sidebar = !state.sidebar,
    setActiveTag: (state, {tag}) => state.activeTag = tag
}