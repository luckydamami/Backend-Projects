/*synchronous programming - agar programming me 2 alag-alag task diye aur sequence me hai to sabse pahel 1 task complete hoga uske bad 2 task complete hoga

setTimeout(() => {
  console.log("Print Hello!!");
}, 4000);
console.log("first execution");
console.log("second execution");
console.log("third executin");
console.log("fourth execution");*/

/*let promise = new Promise((resolve, reject) => {
  console.log("My first promise");
  resolve("promise successfully completed");
});

console.log(promise);*/

/*callback Nesting
function getData(dataId, getCallback) {
  setTimeout(() => {
    console.log("data Id : ", dataId);
    if (getCallback) {
      getCallback();
    }
  }, 3000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});*/

/*function asyncFun(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data Id : ", dataId);
      resolve("success");
    }, 4000);
  });
}

/*function asyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("success");
    }, 4000);
  });
}

console.log("fetching data1...");
asyncFun1().then((res) => {
  console.log(res);
  console.log("fetching data2...");
  asyncFun2().then(() => {
    console.log(res);
  });
});
*/
// console.log("Fetching Data1...");
// asyncFun(101).then((res) => {
//   console.log(res);
//   asyncFun(102).then((res) => {
//     console.log("Fetching Data2...");
//     console.log(res);
//     asyncFun(103).then((res) => {
//       console.log("Fetching Data3...");
//       console.log(res);
//     });
//   });
// });

/*asyncFun(101)
  .then((res) => {
    return asyncFun(102);
  })
  .then((res) => {
    return asyncFun(103);
  })
  .then((res) => {
    return asyncFun(104);
  })
  .then((res) => {
    console.log(res);
  });

function Api(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather Data is now!!", dataId);
      resolve("success");
    }, 3000);
  });
}

async function getWeatherData() {
  console.log("fetching data1...");
  await Api(101);
  console.log("fetching data2...");
  await Api(102);
  console.log("fetching data3...");
  await Api(103);
  console.log("fetching data4...");
  await Api(104);
}

getWeatherData();
console.log(promise);*/

/*let a = 8;
let cars = ["BMW", "i20", "Mercedes"];
// var ans;
// let ans;
const ans = 5,
  b = 5;
console.log(cars);
cars.push("Legender");
console.log(typeof cars);

let age = prompt("Enter the age : ");
if (age <= 18) {
  console.log("Your are not eligible for voting!");
} else {
  console.log("You are Teenager!");
}

let count = 10;
let n = prompt("Enter the table number : ");
for (let i = 1; i <= 10; i++) {
  console.log(`${n * i}\n`);
}*/

/*let person = {
  name: "Reena Rajawat",
  age: 25,
  city: "Bhinay",
  isStudent: true,
  hobbies: ["Study", "Tv", "Introvert", "Sleeping"],
};

console.log(person.isStudent);*/

// let carsPrices = ["20000", "14000", "42000", "3000", "26000"];
// let result = carsPrices.filter(checkPrices);

// function checkPrices(price) {
//   return 10000 <= price;
// }
// console.log(result);
