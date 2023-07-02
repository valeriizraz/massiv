'use strict'

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arrey) => {
  let num = 0;
    for (let i = 0; i < arrey.length; i++) {
      num += arrey[i];
    };
    const totalCheck = num / arrey.length;
    console.log(num);
    console.log(totalCheck);
};

getAverageValue(allCashbox);