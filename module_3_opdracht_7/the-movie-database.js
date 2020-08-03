let favMovies = [{
    name: 'Hamilton',
    duration: 160,
    stars: [' Lin Manual Miranda', ' Phillipa Soo', ' Leslie Odom Jr.', ' Daveed Diggs']
},
{
    name: 'Phantom of the Opera',
    duration: 134,
    stars: [' Gerard Butler', ' Emmy Rossum', ' Patrick Wilson']
},
{
    name: 'Pride & Prejudice',
    duration: 129,
    stars: [' Keira Knightley', ' Matthew Macfadyen', ' Rosamund Pike', ' Simon Woods']
}
];

let movieInfo = function () {
    let message = movie.name + ' lasts for ' + movie.duration + ' minutes. Stars:' + movie.stars + '.';
    console.log(message);
}

movieInfo(movie);









const myFavMovie = {
    title: "Puff the Magic Dragon",
    duration: 220,
    stars: ["Puff", "Jackie", "Living Sneezes"]
  };
  
  // De oplossing met een for loop
  const printMovie1 = function(movie) {
    console.log(movie.title + " lasts for " + movie.duration + " minutes");
    let starsString = "Stars: ";
    for (let i = 0; i < movie.stars.length; i++) {
      starsString += movie.stars[i];
      // Uigebreide syntax: starsString = starsString + movie.stars[i]
      if (i !== movie.stars.length - 1) {
        starsString += ", ";
      }
    }
    console.log(starsString);
  };
  
  // De oplossing met een array.join
  const printMovie2 = function(movie) {
    console.log(movie.title + " lasts for " + movie.duration + " minutes");
    console.log("It stars: " + movie.stars.join(", "));
  };


  printMovie1(myFavMovie);
  printMovie2(myFavMovie);