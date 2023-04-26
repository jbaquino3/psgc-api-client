const { getBarangays } = require("psgc-api-client")

getBarangays(141102129).then((res) => {
  console.log(res)
}).catch((err) => {
    console.log(err)
})
