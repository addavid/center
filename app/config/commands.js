/**
 * CONTAINS ALL COMMANDS
 * LAST CHANGE: 25/03/2020
 */
const config = {
    commands: {
        g: { // Command-key that will be used to access the site
            category: 'Development', // Category name will appear in the help section
            name: 'Github', // The name of the website
            website: 'https://www.github.com', // URL of the website (without search string)
            searchQuery: '/search?q=', // The search query that will be used in order to search the site
            color: 'linear-gradient(135deg, rgb(156, 180, 67), rgb(128, 180, 67))' // The background color will be changed to this
        },
        r: {
            category: 'Social',
            name: 'Reddit',
            website: 'https://www.reddit.com',
            searchQuery: '/search?q=',
            color: 'linear-gradient(135deg, rgb(95, 153, 207), rgb(95, 125, 207))'
        },
        y: {
            category: 'Media & Content',
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
            category: 'Media & Content',
            name: 'Spotify',
            website: 'https://www.spotify.com',
            searchQuery: '',
            color: 'linear-gradient(135deg, rgb(255, 136, 0), rgb(255, 200, 0))'
        },
        n: {
            category: 'Development',
            name: 'NPM Registry',
            website: 'https://www.npmjs.com',
            searchQuery: '/search?q=',
            color: 'linear-gradient(135deg, #fb8817, #ff4b01, #c12127, #e02aff)'
        },
        p: {
            category: 'Development',
            name: 'PyPi',
            website: 'https://pypi.org',
            searchQuery: '/search/?q=fabric',
            color: 'linear-gradient(135deg, #0073b7, rgb(255, 200, 0))'
        },
        w: {
            category: 'Media & Content',
            name: 'Wikipedia',
            website: 'https://en.wikipedia.org',
            searchQuery: '/wiki/',
            color: 'linear-gradient(135deg, rgba(121,121,116,0.7581233176864496) 35%, rgba(213,218,218,1) 100%)'
        },
        l: {
            category: 'Media & Content',
            name: 'Genius',
            website: 'https://genius.com/',
            searchQuery: '/search?q=',
            color: 'linear-gradient(to right, rgb(241, 231, 103) 0%, rgb(254, 182, 69) 100%)'
        },
        i: {
            category: 'Media & Content',
            name: 'iMDb',
            website: 'https://www.imdb.com/',
            searchQuery: '/find?q=',
            color: 'linear-gradient(0deg, rgba(0,0,0,0.783333401720063) 0%, rgba(196,196,30,0.8393558106836485) 0%)'
        }
    },
    defaultSe: 'd'
};

export default config;
