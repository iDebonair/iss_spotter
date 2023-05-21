// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// const ipCallback = (error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('IP address:', ip);

//   fetchCoordsByIP(ip, (error, coordinates) => {
//     if (error) {
//       console.log("It didn't work!", error);
//       return;
//     }

//     console.log('It worked! Returned coordinates:', coordinates);

//     fetchISSFlyOverTimes(coordinates, (error, flyoverTimes) => {
//       if (error) {
//         console.log('Error fetching ISS flyover times:', error);
//         return;
//       }

//       console.log('It worked! Returned flyover times:', flyoverTimes);
//     });
//   });
// };

// fetchMyIP(ipCallback);

const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("Error:", error.message);
    return;
  }

  printPassTimes(passTimes);
});

module.exports = { nextISSTimesForMyLocation };