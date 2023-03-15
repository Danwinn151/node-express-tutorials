const path = require('path')

console.log(path.sep)

////we can use the path module to run the file-path of the application
const filePath = path.join("/content", 'subfolder', 'test.txt')
console.log(filePath)

console.log(path.basename(filePath))
//we can use the path module to run the absolute path of the application
const absolute = path.resolve(__dirname, 'content', "subfolder", 'text.txt')
console.log(absolute);