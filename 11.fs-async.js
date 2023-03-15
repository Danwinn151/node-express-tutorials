const {readFile, writeFile} = require('fs')

console.log("start");//1
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    console.log(first)
    readFile("./content/second.txt", "utf-8", (err, result) => { 
        if(err){
           console.log(err)
           return;
        }
        const second = result
        console.log(second)
        writeFile('./content/result-async.txt', 
                   `Here is the test result: ${first} + ${second}`,
                   (err, result) => {
                    if(err){
                        console.log(err)
                        return;
                    }
                    console.log('done with this task')//3
                   })
    })
})

console.log("starting next task");//2

