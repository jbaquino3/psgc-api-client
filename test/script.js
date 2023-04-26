const { getProvinces } = require("psgc-api-client")

getProvinces().then((res) => {
  console.log(res)
}).catch((err) => {
    console.log(err)
})
