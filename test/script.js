const { getBarangays } = require("psgc-api-client")

getBarangays().then((res) => {
  console.log(res)
}).catch((err) => {
    console.log(err)
})
