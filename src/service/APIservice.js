const axios = require('axios')
const API_URL = 'https://geo.ipify.org/api/v2/country,city'
const API_KEY = process.env.REACT_APP_API_KEY

export default class API {

    static async getLocation() {
        const options = {
            params: {apiKey: API_KEY}
        }
        const resp = await axios(API_URL, options)
        return await resp
    }

    static async getIPLocation(ip) {
        const options = {
            params: {
                apiKey: API_KEY,
                ipAddress: ip
            }
        }
        const resp = await axios(API_URL, options)
        return await resp
    }
}