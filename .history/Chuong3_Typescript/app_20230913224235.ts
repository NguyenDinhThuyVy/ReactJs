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
   age :20
  }
)

/**
 * Function
 * */
const sum = (num1:number , num2:string)=>{
  return num1 + num2
}
sum(2,3)