
console.clear()
console.log(eval("3+2"))
console.log(eval(1+"2"))


//Miscellaneous operators

let options = {timeout : 0, title: "", verbose: false, n: null}

console.log(options.timeout??1000)
console.log(options.title??"untitled")
console.log(options.verbose??true)


//typeof 
let  value = 14586
console.log((typeof value === "string")? "'" + value + "'" : value.toString());