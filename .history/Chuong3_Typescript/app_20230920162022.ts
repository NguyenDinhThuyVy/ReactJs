/**
 * Basic Type
 **/
// string
let car = "Toyota"
let bike:string
bike = "winner"
// bike =150 error

// number
// c1 dư thừa khai báo vì khi gan tyscipt tự hiểu
let num:number
num = 150
// c2
let nums = 10
// num = "hihi" erroe

// boolean
let isLoading = false

// undefined
let body = undefined

// null
let footer:null

// any hạn chế sử dụng
let person:any
person = 10
person ="hihi"
person= false

/**
 * Object
 **/
// let house ={}
// house.address = `Da nang`
let house:{
  address:string,
  color?: string
} = {
  address: '',
  color:''
}
house.address = `Da nang`

/**
 * Array
 * */

// không trả về gì hết thì gọi là never
// function handleError(){
// throw new Error('Loi roi')
// }
let products:any[] = []
products.push(1)
products.push('hihi')

// string[]
let names= ['Alex',"Ben"]
let addresses: string[] =[]
addresses.push('Da Nang')

// number
let numbers: number[] =[]
// numbers.push(2)
numbers = [1,2,3]

// object array
let people:{
  name:string
  age:number
}[] =[]
people.push(
  {name : 'zyzy',
   age :20,
  },{
    name : 'hehe',
    age :20,
  },
)

/**
 * Function
 * */
const sum = (num1:number , num2:number)=>{
  return num1 + num2
}
sum(2,3)

const sub: (num1: number, num2: number) =>number =(num1: number, num2: number) => num1 - num2

const handle =() =>{
  console.log(123)
}

/**
 * Union
 * */
let price:string |number
price = '10'
price = 20
let everybody:{name:string|number}|{firstName:string}= {
  name: 'zyzy'
}

/**
 * Enum
 * */
enum sizes {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL'
}
let size = sizes.S

/**
 * Interface
 * */
interface State {
  name: string
  isLoading:boolean
}
interface State {
  age: number
}

let state: State = {
  name:'zyzy',
  isLoading:true,
  age: 20
}
// interface Name  {
//   name: string
// }

// interface Age {
//   age: number
// }

// Không thể dùng như này được
// interface Person = Name | Age

/**
 * Type
 */
type States = {
  name: string
  isLoading: boolean
}
let states: States = {
  name:'zyzy',
  isLoading:true
}
// type Name = {
//   name: string
// }

// type Age = {
//   age: number
// }

// type Person = Name | Age

const handleClick = <Type>(value: Type) => value

let value = 100
handleClick<string>('100')


/**
 * Class
 */
class Persons {
  private name:string
  age:number
  readonly money:number = 40
  constructor(name:string , age:number){
    this.name = name;
    this.age = age;
  }
  handle(){
  let value = this.money
  }
}
const alex = new Persons('zyzy',20)
alex.age

class Person1{
  constructor(public name:string, public age:number){}
}