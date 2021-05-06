// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, matchingDrivers){
    return drivers.filter(function (matches) {
    return matches.toLowerCase() === matchingDrivers.toLowerCase()})
    }
//this is that same function as an arrow function
//  function findMatching(drivers, matchingDrivers){
//  return drivers.filter(matches => matches.toLowerCase() === matchingDrivers.toLowerCase())
//  }
  function fuzzyMatch(drivers, matchingDriversLetters){
 return drivers.filter(element => element.toLowerCase().indexOf(matchingDriversLetters.toLowerCase())=== 0)
  }
 function matchName(drivers, driverName){
return drivers.filter( driverMatch => driverMatch.name === driverName)
 }
