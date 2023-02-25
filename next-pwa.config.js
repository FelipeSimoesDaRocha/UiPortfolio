const withPWA = require("next-pwa")
// disabled: process.env.NODE_ENV === "development",

module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        skipWaitings: true,
        disabled: false,
        sw: "sw.js"
    },
})
