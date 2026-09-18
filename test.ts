const func = (): number => {
    return 2
}

const arr = ["", ""]
arr.map((item): never => { throw new Error(item) })

function func2(): { a: number, b: string } {
    return { a: 2, b: "" }
}

function func3({ a: number, b: string }): {} { return {} }
//func3({a: 2, b: "", c: ""})
const obj = { a: 2, b: "", c: "" }
func3(obj)

type myUser = {
    id: number,
    firstName: string,
    lastName: string
}
type myString = string
function func4(user1: myUser): myUser {
    const user2: myUser = user1
    return user2
}
func4({
    id: 1,
    firstName: "",
    lastName: ""
})

type User = {
    readonly id: number,
    name: string,
    address?: string
}
const user: User = {
    id: 1,
    name: 'name',
}
function func5(a: number, b?: string) { console.log(a, b) }
func5(1)

type firstType = {
    first: string
}
type secondType = {
    second: string
}
type thirdType = firstType & secondType & { fourth: string }
const test: thirdType = {
    first: 'first',
    second: 'second',
    fourth: 'fourth'
}

const test2: number[] = [1, 2, 3]
const test3: Array<number> = [1, 2, 3]

const test4: number | string | User = 1
function func6(a: number | string) { if (typeof a === 'string') a.toLowerCase }
const test5: (number | string)[] = [1, '2', 3]
const test6: 'a' | 'b' = 'a'

const test7: [a: string, b: number] = ['', 1]

enum myEnum {
    CONSTANT1,
    CONSTANT2,
    CONSTANT3
}
const test8: myEnum = myEnum.CONSTANT1

interface myInterface {

}
const test9: myInterface = {}

class myClass implements firstType {
    first: string
}

function func7<T>(value: T): T {
    return value
}
function func8<T>(value: T[]): T {
    return value[0]
}
const func9 = <T>(value: T[]): T => {
    return value[0]
}
function func10<T extends number, U extends string>(value: { id: T, name: U }): {} {
    return {
        id: value.id,
        name: value.name
    }
}
func10({ id: 1, name: '' })
class myClass2<T, U> {
    constructor(
        public id: T,
        public name: U
    ) {}

    func(): T {
        return this.id
    }
}

function func11(value: firstType | secondType): value is firstType {
    return (value as firstType).first !== undefined
}

interface sample {
    a: number
}

function sample2<T>(value: T) { console.log(value) }
sample2<sample>({ a: 1 })

export {}