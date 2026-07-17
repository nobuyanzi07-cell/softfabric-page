/*
 in built js library<api> handling http request

 fetch(@param1,@param2) => response on object with function th
                         => response.catch

 @param1=>url:<>
 @param2=>configuration. <headers,method>

*/

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.text())
  .then((result) => {
     console.log("type of result", typeof result);
     console.log(result);
  })
  .catch((error) => console.error(error));
/*
let users=[]
user=getUser()//github<>time x, it can iminute
//uncertain and takes time.Promise
*/
  /*
code without a promise.
 1.create a variable<any name> global variable
 2.console.log the value of the variable.
 3.create and call a function that modifies this variable
 4.console.log( ) the value of the variable
*/



let result = fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.text())
  .then((result) => {
    
  })

console.log(result)