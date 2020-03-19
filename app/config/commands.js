/**
 * CONTAINS ALL COMMANDS
 * LAST CHANGE: 19/03/2020
 */
const config = {
    commands: {
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
        y: {
            category: 'Media',
            name: 'YouTube',
            website: 'https://www.youtube.com',
            searchQuery: '/results?search_query=',
            color: 'linear-gradient(135deg, rgb(205, 32, 31), rgb(205, 76, 31))'
        },
        s: {
            category: 'Search Engine',
            name: 'Google',
            website: 'https://encrypted.google.com',
            searchQuery: '/search?q=',
            color: 'linear-gradient(135deg, #da552f, #da802f)'
        },
        d: {
            category: 'Search Engine',
            name: 'DuckDuckGo',
            website: 'https://www.duckduckgo.com',
            searchQuery: '/?q=',
            color: 'linear-gradient(135deg, rgb(29, 185, 84), rgb(29, 169, 116))'
        },
        m: {
            category: 'Media',
            name: 'Spotify',
            website: 'https://www.spotify.com',
            searchQuery: '',
            color: 'linear-gradient(135deg, rgb(255, 136, 0), rgb(255, 200, 0))'
        }
    },
    defaultSe: 'd'
};

export default config;
