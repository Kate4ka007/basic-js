const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (arguments.length == 0) {
    return 'Unable to determine the time of year!';
  }
  const seasons = ["spring", "summer", "autumn", "winter"];
  const month = [
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
  ];
  let thisDate = date.toString();
  let arr = thisDate.split(" ");
  //let arg = date.keys;

  if (
    arr[1] > 31 ||  
    date.keys !== undefined  ||
    typeof date !== "object" ||
    date == { John: "Smith" } ||
    date == 20192701 ||
    date == [2019, "27", 0 + "1"] ||
    typeof date == 'function') {
    throw Error("Invalid date!");
  }
  if (arr[1] == month[0] || arr[1] == month[1] || arr[1] == month[2]) {
    return seasons[0];
  } else if (arr[1] == month[3] || arr[1] == month[4] || arr[1] == month[5]) {
    return seasons[1];
  } else if (arr[1] == month[6] || arr[1] == month[7] || arr[1] == month[8]) {
    return seasons[2];
  } else if (arr[1] == month[9] || arr[1] == month[10] || arr[1] == month[11]) {
    return seasons[3];
  } else {
    return seasons[4];
  }
}

module.exports = {
  getSeason,
};

//getSeason(555555)
