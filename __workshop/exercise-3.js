// Exercise 3
// ----------

const doublesLater = async (num) => {
  return new Promise((resolve, reject) => {
    console.log("Calculating...");
    if (typeof num === "number") {
      setTimeout(() => {
        let doubled = num * 2;
        console.log("Number Doubled!");
        resolve(doubled);
      }, 2000);
    } else {
      reject("Invalid input");
    }
  });
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  let sum = 0;
  sum += await doublesLater(num);
  sum += await doublesLater(sum);
  sum += await doublesLater(sum);
  return sum;
};

// 4. verification
handleSum(10).then((ans) => console.log(ans));
