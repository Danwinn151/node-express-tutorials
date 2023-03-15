//npm --global command comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packagename>
//global dependecy - use it any project
//npm install -g <packageName>

//package file - manifest file(stores important info about project)
//manual approach(create package.json in the root, create ppt)
//npm init(step by step, press enter to skip)
//npm init -y (everything by default)

const _ = require("lodash")

const items = [1, [2, [3, [4]]]]
const smallLetter = 'hi'

const newItems = _.flattenDeep(items)
const newItems2 =  _.capitalize(smallLetter)

console.log(newItems)
console.log(newItems2);