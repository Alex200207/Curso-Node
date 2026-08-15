// los argv son argumnets values 

console.log(process.argv)


// tomar los argumenos y valores

const [tsnode, app, ...args] = process.argv

console.log(args)