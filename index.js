function produceDrivingRange(blockRange) {
  return function(blockStart, blockEnd) {
    let start = parseInt(blockStart, 10);
    let end = parseInt(blockEnd, 10);
    let distance = Math.abs(end - start);
    let difference = blockRange - distance;

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fee) {
    return fee * tip;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
