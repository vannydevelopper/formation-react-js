

/**
 * fetch data from api wiht default options
 * @param {string} url - the url to fetch to
 * @param {object} options - additional options
 * @returns {Promise}
 */
export const fetchApi = async (url, options = {}) => {
        // const user = JSON.parse(localStorage.getItem('user'))
        const user = null
        const isProduction = false
        const domain = isProduction ? 'http://app.mediabox.bi:5012' : 'http://192.168.243.187:3000'
        if (user) options = { ...options, headers: { ...options.headers, authorization: `bearer ${user.token}` } }
        const response = await fetch(domain+url, {
                  ...options
        })
        if (response.ok) {
                  return response.json()
        } else {
                  throw await response.json()
        }
}









