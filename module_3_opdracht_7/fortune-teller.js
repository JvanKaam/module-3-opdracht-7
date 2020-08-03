const tellFortune = function (jobTitle, geographicLocation, partnersName, numberOfChildren) {
    console.log("You will be a(n) " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kid(s).");
}

tellFortune('programmer', 'London', 'Dave', '2');
tellFortune('actor', 'China', 'Elizabeth', '3');
tellFortune('drugaddict', 'a mental hospital', 'your roommate Steven', '5 imaginary');



const tellFortune = function(jobTitle, geoLocation, partner, numKids) {
    let future =
      "You will be a " +
      jobTitle +
      " in " +
      geoLocation +
      " and married to " +
      partner +
      " " +
      " with " +
      numKids +
      " kids.";
    console.log(future);
  };
  
  tellFortune("bball player", "spain", "Shaq", 3);
  tellFortune("stunt double", "Japan", "Ryan Gosling", 3000);
  tellFortune("Elvis impersonator", "Russia", "The Oatmeal", 0);