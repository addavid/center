const commands = {
    g: {
        category: 'Work',
        name: 'Github',
        website: 'https://www.github.com',
        searchQuery: '/search?q=',
        color: 'linear-gradient(135deg, rgb(156, 180, 67), rgb(128, 180, 67))'
    },
    r: {
        category: 'Personal',
        name: 'Reddit',
        website: 'https://www.reddit.com',
        searchQuery: '/search?q=',
        color: 'linear-gradient(135deg, rgb(95, 153, 207), rgb(95, 125, 207))'
    },
    defaultSearchEngine: {
        category: 'Search Engine',
        name: 'DuckDuckGo',
        website: 'https://www.duckduckgo.com',
        searchQuery: '/?q=',
        color: 'linear-gradient(135deg, rgb(29, 185, 84), rgb(29, 169, 116))'
    }
};

export default commands;