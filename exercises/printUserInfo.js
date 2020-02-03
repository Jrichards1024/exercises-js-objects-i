let process = require('process');
// There are many facts about a user we might want to keep track of,
// but we want to be able to treat a user as a single value.
// That means the user has to be some kind of collection.

// Here's one way we might do it using an array.

let user = {};

user['firstName'] = 'Joseph';
user['lastName'] = 'Richards';
user['currentLocation'] = 'Atlanta';
user['favoriteSongs'] = ['All Night', 'Breakdown', 'Cry'];
user['age'] = 119;
user['favoriteFood'] = 'asparagus';
user['favoriteMovies'] = ['Batman Returns', 'Interstellar', 'Call Me By Your Name'];

// To get started, set user['canBeDisplayed'] to true instead of false
user['canBeDisplayed'] = true;

if (user['canBeDisplayed'] === false) {
  console.log('Hey! Open up printUserInfo.js to get started.');
  process.exit();
}

console.log(`Hello, ${user['firstName']} ${user['lastName']}.`);
console.log();

console.log(`How's the weather in ${user['currentLocation']}?`);
console.log();

if (user['age'] >= 100) {
  console.log(`Wow! You're ${user['age']} years old? Fewer than 0.2% reach that age.`);
  console.log();
}
if (user['favoriteFood'] === "Spaghetti"){
  console.log(`OMG! I really LOVE ${user['favoriteFood']} too!`)}

else {
  console.log(`Your favorite food is ${user['favoriteFood']}? EW! You have TERRIBLE taste, no offense.`)}

console.log()

function printFavorites(array){
  for (let i = 0; i < array.length; i += 1) {
    let position = i + 1;
    let Name = array[i]
    console.log(`${position}. ${Name}`)
  }
}

console.log('Looks like you have great taste in music. Your favorite songs:');
printFavorites(user['favoriteSongs'])

// for (let i = 0; i < user['favoriteSongs'].length; i += 1) {
//   let songPosition = i + 1;
//   let songName = user['favoriteSongs'][i];

 // console.log(`${songPosition}. ${songName}`);
//}
console.log('Your movie taste is pretty average tbh. Your favorite songs are:')
printFavorites(user['favoriteMovies'])

// for (let i = 0; i < user['favoriteMovies'].length; i += 1) {
//   let moviePosition = i + 1;
//   let movieName = user['favoriteMovies'][i];
//   console.log(`${moviePosition}. ${movieName}`)
// }
