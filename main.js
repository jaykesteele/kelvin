const kelvin = 293;
// this is the starting tempature

const celsius = kelvin - 273;
// this is kelvin converted into celsius

const fahrenheit = (Math.floor(celsius * (9 / 5) + 32));
// this is the final conversion to fahrenheit

console.log (`The tempature is ${fahrenheit} degrees Fahrenheit`);
