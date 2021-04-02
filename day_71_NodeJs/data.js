let lastName = "superman"
let cities = ['Paris', 'Berlin', 'Casablanca', 'London', 'LA', 'Sydney']


//syntax 1
// module.exports.myLastName = lastName
// module.exports.myCities = cities


//syntax 2
//module.exports = { cities: cities, lastName: lastName }
module.exports = { cities, lastName }

