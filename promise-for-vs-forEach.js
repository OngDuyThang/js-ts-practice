const arr = new Array(10).fill(1);
const promise = (i) =>
    new Promise((res) =>
        setTimeout(() => {
            res(i);
        }, 2000)
    );

// traditional for loop wait for each await checkpoint
(async () => {
    console.log("start");
    for (let i = 0; i < arr.length; i++) {
        const res = await promise(i);
        console.log(res);
    }
    console.log("done");
})();
console.log('run this while JS thread free from async operation')

// result similar to above, but use global async instead of inside async function
// console.log("start");
// for (let i = 0; i < arr.length; i++) {
//     const res = await promise(i);
//     console.log(res);
// }
// console.log("done");

// forEach does not wait for the await checkpoint inside its async callback
// because it does not wait for each timer, so all promises will resolved together after 1 second
// console.log("start");
// arr.forEach(async (item, index) => {
//     const res = await promise(index);
//     console.log(res);
// });
// console.log("done");
