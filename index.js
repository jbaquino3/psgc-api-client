const Axios = require("axios")
const { setupCache } = require("axios-cache-interceptor")

const axios = setupCache(Axios, {
    withCredentials: false,  
); 

module.exports = {
  getIslandGroups: async (code = "", collection = null) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://psgc.gitlab.io/api/island-groups/${code}` +
            (collection ? "/" + collection : "")
        )
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.response.statusText)
        })
    })
  },

  getRegions: async (code = "", collection = null) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://psgc.gitlab.io/api/regions/${code}` +
            (collection ? "/" + collection : "")
        )
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.response.statusText)
        })
    })
  },

  getProvinces: async (code = "", collection = null) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://psgc.gitlab.io/api/provinces/${code}` +
            (collection ? "/" + collection : "")
        )
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.response.statusText)
        })
    })
  },

  getDistricts: async (code = "", collection = null) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://psgc.gitlab.io/api/districts/${code}` +
            (collection ? "/" + collection : "")
        )
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.response.statusText)
        })
    })
  },

  getMunicipalities: async (code = "", collection = null) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://psgc.gitlab.io/api/municipalities/${code}` +
            (collection ? "/" + collection : "")
        )
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.response.statusText)
        })
    })
  },

  getCities: async (code = "", collection = null) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://psgc.gitlab.io/api/cities/${code}` +
            (collection ? "/" + collection : "")
        )
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.response.statusText)
        })
    })
  },

  getCitiesMunicipalities: async (code = "", collection = null) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://psgc.gitlab.io/api/cities-municipalities/${code}` +
            (collection ? "/" + collection : "")
        )
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.response.statusText)
        })
    })
  },

  getBarangays: async (code = "") => {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://psgc.gitlab.io/api/barangays/${code}`)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.response.statusText)
        })
    })
  },
}
