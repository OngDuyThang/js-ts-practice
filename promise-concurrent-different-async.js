const promise = (number, ms) => new Promise((resolve, reject) => {
    console.log(`PROMISE ${number} START`)
    setTimeout(() => resolve(`PROMISE ${number} END`), ms)
})

async function func(number, ms) {
    // Await checkpoint within async function represent waiting for a promise - an asynchronous operation result, usually an I/O operation result (or timer in this example)
    // Subsequent operations within the async function must wait for asynchronous operation result

    // The main thread create promise and start the asynchronous operation (I/O operation or timer in this example)
    // The runtime (Node/browser) will handle the asynchronous operation (I/O operation or timer in this example)
    // The event loop (as a traffic controller) will schedule the async function to resume when the asynchronous operation is complete (promise resolved/rejected)
    // While the asynchronous operation is in progress, the main thread is free to do other operations OUTSIDE the async function (I/O non-blocking)
    const res = await promise(number, ms)

    // Subsequent operations within the async function must wait for the asynchronous operation (I/O operation or timer in this example) to complete
    console.log('BACK INSIDE ASYNC FUNCTION')
    console.log(res)

    // Another old approach syntax
    // promise(number, ms).then((res) => {
    //     console.log('BACK INSIDE ASYNC FUNCTION')
    //     console.log(res)
    // })
}

// Concurrent executions between async functions
// The main thread is free to do these outer operations while inner of async functions is paused at await checkpoint
// The main thread execute 1st func(), while the 1st paused at await checkpoint, it escape the 1st func() and continue execute the log and 2nd func()
// 1st func() and 2nd func() are executed concurrently with overlapping times (1st func() PAUSING... -> console.log -> 2nd func() PAUSING...)
func(1, 3000)
console.log('GO OUTSIDE ASYNC FUNCTION')
func(2, 5000)

// Output:
// PROMISE 1 START
// GO OUTSIDE ASYNC FUNCTION
// PROMISE 2 START
// (3s later)
// BACK INSIDE ASYNC FUNCTION
// PROMISE 1 END
// (2s later)
// BACK INSIDE ASYNC FUNCTION
// PROMISE 2 END

// Promise.timeout = (ms) => {
//     return new Promise(res => {
//         setTimeout(() => {
//             res('ok')
//         }, ms)
//     })
// }

// Promise.timeout(1000).then((data) => { console.log(data) })