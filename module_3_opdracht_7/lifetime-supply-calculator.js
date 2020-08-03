const calculateSupply = function (age, amountPerDay) {
    let amount = amountPerDay*365*age;
    console.log("You will need " + amount + " to last you until the ripe old age of " + age + ".");
}

calculateSupply(35, 2);
Math.round (calculateSupply(80, 0.6));
Math.round (calculateSupply(112, 0.4));



const calculateSupply = function(age, numPerDay) {
    const maxAge = 100;
    const totalNeeded = numPerDay * 365 * (maxAge - age);
    let message =
      "You will need " +
      totalNeeded +
      " cups of tea to last you until the ripe old age of " +
      maxAge;
    console.log(message);
  };