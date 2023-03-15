//CommonJS, every file is module by default
//Modules - Encapulated Code(only share minimum)

const {peter, myName} = require('./4.name')
const sayHi = require("./5.utils")
const {singlePerson} = require("./6.alternative-flavor")
const {name} = singlePerson
require('./7.mind-grenade')
sayHi('Gabriella')
sayHi(peter)
sayHi(myName)
sayHi(name)