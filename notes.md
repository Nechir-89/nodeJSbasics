- global object
- ES6 modules support has been added since node version 8.5
- what makes ES6 different than commonJS
- to use import to replace require we either need to set type to 
  "module" inside package.json or we need to change file 
  extension from js to mjs
- __dirname and __filename are not defined in ES module scope
- since global variables like __dirname and __filename are not working with type module, I'm returning back to commonJS

