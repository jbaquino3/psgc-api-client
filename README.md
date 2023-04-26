# Philippine Standard Geographic Code (PSGC) API Client

This is a client for sending HTTP requests to the [PSGC API](https://psgc.gitlab.io/api/) for fetching the list of regions, provinces, cities, municipalities, and barangays in the Philippines. This package is configured with [Axios](https://axios-http.com/) to communicate with the [PSGC API](https://psgc.gitlab.io/api/), so you don't have to.

## Installation
To install the package, run the following command.
```
npm install psgc-api-client
```

## Usage
This package contains the following functions.
```
1. getIslandGroups(code, collection)
2. getRegions(code, collection)
3. getProvinces(code, collection)
4. getDistricts(code, collection)
5. getMunicipalities(code, collection)
6. getCities(code, collection)
7. getCitiesMunicipalities(code, collection)
8. getBarangays(code, collection)
```
The parameters `code` and `collection` are optional. For example, to fetch all provinces, use the following statements.
```
import { getProvinces } from 'psgc-api-client'
// or
// const { getProvinces } = require('psgc-api-client')

getProvinces().then(data => {
    console.log('Provinces', data)
}).catch(err => {
    console.log('Error', err)
})
```

To fetch a specific province byt its code:
```
getProvinces('063000000')
```
To fetch the list of cities and municipalities under the province with code `063000000`:
```
getProvinces('063000000', 'cities-municipalities')
```
The list of possible values for the `collection` properties are as follows.
1. regions
2. provinces
3. districts
4. cities
5. municipalities
6. cities-municipalities
7. sub-municipalities
8. barangays

For reference on the API used by this package, refer to the [documentation](https://psgc.gitlab.io/api/).

## Releasing
Before releasing the package, add notable changes to the [changelog](CHANGELOG.md) file.
```
## [Unreleased]

### Added
- Changelog
```
To release the package, trigger the `Release package` workflow from the Actions tab.