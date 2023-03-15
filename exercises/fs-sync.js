const {writeFileSync, readFileSync, write} = require("fs")

const file = readFileSync("./folder/file.txt", "utf-8")
console.log(file)

writeFileSync(
    "./folder/sync.txt", 
    `Here is the sync file let do by ${file}`,
    {flag: "a"}
)