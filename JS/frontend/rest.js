/*
--> API<Library> is a way to interface 2 or more applications.

Mobile (Android) options for interfacing:
  -> Bluetooth <Android developer tools>
       documentation of interfacing bluetooth
  -> Node JS. Writes to the file system
       fs api.
  -> Node JS FS <Windows>
       touch <file name>
  -> Node JS <use shell directly>
  -> Rules and guidelines for interfacing.

---> REST API
  (Representational State Transfer Application Programming Interface)

  API: it allows different devices or applications to communicate 
  over the internet <http or https> (Hyper Text Transfer Protocol)

  - Guidelines and rules:

  1. What type of applications can be interfaced.
       - The client device must be running an <http client>
       - Http Client runs on a <client device>
       - Client device is hardware that can connect to the internet:
           1. laptop
           2. mobile phone
           3. smart phones
           4. IoT devices <>

  2. HTTP Clients
       - Browser
       - curl <show you>
       - Postman
       - ...etc

  3. Communication
       - Is a one way communication: server and client.
       - Client makes a request and
         Server (computer running http client) responds.

  4. How to make a request
       1. url <universal resource locator> required
       2. Method: <GET, POST, PATCH, DELETE> required
       3. Headers: <security: necessary depends on api>
       4. Body: <Form, image, json>
       5. Parameters <meta information> search, filtering

TODO:
  1. Install Postman.
  2. Go to your favourite site on the web.
       Click inspect. Go to the Network tab.
       1. Identify the method
       2. Identify the url
       3. Identify the params if any
       4. Check the request time
  3. For the same request, try it on Postman and curl http clients.

  http method
get: <gettiint data fetch data serching>
Post: <Posting data><data:json,file,html>
Patch:<updateing data>
Put: <updating data>
Delete: <Delete data>

Https wating response <wait for response>
status code:
     100 to 199: <informational state codes>
     200 to 299: <success status codes>
          204
          201
     300 to 399: <redirection code>
     400 to 499: <client made a mistake>
          404: page note found
          401: not authorized
          409: forbidden
     500 to 599: <Servor error>
          nothing a user can do

Response body
     1. Blob:<binary data>: pictures,videos
     2. html:<mazimobility.com>
     3. json:<http://api.github.com/users>

how does a rest api relate to js
     github user list
     search github users
     github api
     POSTMAN


 */

