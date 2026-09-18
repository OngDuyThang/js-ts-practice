const longFetch = (ms) => new Promise((res) => {
    setTimeout(() => res(`promise ${ms} done`), ms)
})

// async function func1() {
//     const promise_1 = longFetch(3000)
//     const promise_2 = longFetch(5000)

//     const res_1 = await promise_1
//     console.log(res_1)

//     const res_2 = await promise_2
//     console.log(res_2)
// }
// func1()

// async function func2() {
//     const promise_1 = longFetch(7000)
//     const promise_2 = longFetch(5000)

//     const res_1 = await promise_1
//     console.log(res_1)

//     const res_2 = await promise_2
//     console.log(res_2)
// }
// func2()

async function func3() {
    const promise_1 = longFetch(3000)
    const promise_2 = longFetch(5000)

    const [res_1, res_2] = await Promise.all([promise_1, promise_2]) // Another approach syntax, could be use for multiple Promise then catch
    console.log(res_1)
    console.log(res_2)
}
func3()