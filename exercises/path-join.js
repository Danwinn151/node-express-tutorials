const path = require("path")

//to join our folder, subfolder, and the file.txt file

const pathJoin = path.join("/folder", "subfolder", 'file.text')

console.log(pathJoin);

//to get the basename of my pathname

console.log(path.basename(pathJoin));

