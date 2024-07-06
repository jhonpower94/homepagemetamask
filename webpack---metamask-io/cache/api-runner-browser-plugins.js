module.exports = [{
    plugin: require('../node_modules/gatsby-plugin-google-tagmanager/gatsby-browser.js'),
    options: {
        "plugins": [],
        "id": "GTM-M67JQ84",
        "includeInDevelopment": false,
        "enableWebVitalsTracking": true,
        "defaultDataLayer": null,
        "routeChangeEventName": "gatsby-route-change",
        "selfHostedOrigin": "https://www.googletagmanager.com"
    },
}, {
    plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
    options: {
        "plugins": [],
        "trackingId": "UA-37075177-6",
        "head": true,
        "anonymize": true,
        "exclude": ["/preview/**"],
        "respectDNT": false,
        "pageTransitionDelay": 0,
        "enableWebVitalsTracking": false
    },
}, {
    plugin: require('../node_modules/gatsby-plugin-styled-components/gatsby-browser.js'),
    options: {
        "plugins": [],
        "displayName": true,
        "fileName": true,
        "minify": true,
        "namespace": "",
        "transpileTemplateLiterals": true,
        "topLevelImportPaths": [],
        "pure": false,
        "disableVendorPrefixes": false
    },
}, {
    plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
    options: {
        "plugins": [],
        "name": "MetaMask.io",
        "short_name": "MM",
        "description": "A crypto wallet & gateway to blockchain apps",
        "start_url": "/",
        "background_color": "#FFFFFF",
        "theme_color": "#FFFFFF",
        "display": "standalone",
        "icon": "/home/runner/work/website/website/src/images/metamask-logo.png",
        "icons": [{
            "src": "/home/runner/work/website/website/favicon/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable"
        }, {
            "src": "/home/runner/work/website/website/favicon/android-chrome-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
        }, {
            "src": "/home/runner/work/website/website/favicon/android-chrome-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
        }, {
            "src": "/home/runner/work/website/website/favicon/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }],
        "legacy": true,
        "theme_color_in_head": true,
        "cache_busting_mode": "query",
        "crossOrigin": "anonymous",
        "include_favicon": true,
        "cacheDigest": "48400a28770e10dd52a8c0e539aeb282"
    },
}, {
    plugin: require('../gatsby-browser.js'),
    options: {
        "plugins": []
    },
}, {
    plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
    options: {
        "plugins": []
    },
}]