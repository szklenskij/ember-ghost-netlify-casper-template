// Modified from the textbook example by Gregory M. Kapfhammer
// Please add all of the required source code at the DONE markers
//
// Please refer to the following GitHub repository for country flags:
// https://github.com/hjnilsson/country-flags
//
// From this directory you can download images that match the size of those in the book:
// https://github.com/hjnilsson/country-flags/tree/master/png100px
//
// define constructor function for Country objects
function Country(name, iso, capital, population) {
  "use strict";
  // DONE: Add the missing source code in the Country constructor
  this.name = name;
  this.iso = iso;
  this.capital = capital;
  this.population = population;
}
(function() {
  "use strict";
  // DONE: create an array of sample country objects
  var countries = [
    new Country("Bahamas", "BS", "Nassau", 301790),
    new Country("Canada", "CA", "Ottawa", 336790000),
    new Country("Germany", "DE", "Berlin", 81802257)
  ];
  // DONE: you can also push each new country object onto the end of the array
  countries.push(new Country("Spain", "ES", "Madrid", 46505963))
  countries.push(new Country("United Kingdom", "GB", "London", 62348447))
  // now loop through all this array of country objects
  // note that many web developers do not consider it a best practice
  // to modify the DOM through the document.write method. Please talk
  // with the course instructor to learn more about this idea.
  for (var i = 0; i < countries.length; i++) {
    // DONE: Add in the source code to start the div marker
    var c = countries[i];
    document.write("<div class='box'>");
    document.write("<img src='img/flags/" + c.iso + ".png' class='boxImg'>");
    document.write("<p>");
    // now loop through all of the details about the country
    for (var propertyName in c) {
      document.write("<strong>");
      document.write(propertyName + ": ");
      document.write("</strong>");
      document.write(c[propertyName]);
      document.write("<br>");
    }
    // DONE: Add in the source code to conclude the div marker
    document.write("</p>");
    document.write("</div>");
  }
})();
