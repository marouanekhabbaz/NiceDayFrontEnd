# NiceDayFrontend

Nice Day is a personalized weather service application with the ability to login and signup. It provides users with hourly, daily and 5 day forecasts using the user geolocation. Users can also save different weather conditions in a memories list.  

[Live app](http://ng-client.s3-website.us-east-2.amazonaws.com/home)


[Back end repo](https://github.com/marouanekhabbaz/Nice_day_server)


## Tech Stack

This web app was developed using : 
  * Java, Junit , Mockito, Log4J , Maven .
  * PostgreSQL, Spring Data, Spring MVC, Spring Boot.
  * Angular 2+, TypeScript, JavaScript, Bootstrap , HTML , CSS.
  *  AWS EC2, AWS RDS,  AWS CodePipeline, AWS S3, Docker.
  * REST,  Sonarcloud, Agile-Scrum. 



## User stories

As a user I can : 

- Register 
- Login
- Access to hourly weather based on my current location
- Access daily weather based on my current location
- Access weekly weather on my current location
- Search for weather forecast based on different location
- Save weather to their memories list 


## API Documentation
[REST API](http://ec2-18-206-252-36.compute-1.amazonaws.com:5000/users/)


| Route                                                               | Method | Status Code | Description                                                         |
| ------------------------------------------------------------------- | ------ | ----------- | ------------------------------------------------------------------- |
| /users                                                              | GET    | 200         | Returns a list of all users                                          |
| /users/:id                                                           | GET    | 200         | Returns a the user with the id                                      |
| /users                                                            | POST   | 201         | Creates a new user                                                     |
| /users/find                                                       | POST   | 200        | find a user by email and password                                       |
| /users/:id                                                         | PUT    | 200         | Updates the status of the user for the given ID                       |
| /users/find/{email}                                                 | POST    | 200         | find a user by email                                                |
| /users/:id                                                         | DELETE    | 200         | Delete the user for the given ID                                   |
| /users/{id}/memories                                               | GET    | 200                                 | get all memories for a user |
| /users/{id}/addmemory                                       | POST   | 201         | Add a memory for the user with the given ID  |            
| /users/{userId}/memory/{memoryId}                                      | GET   | 200    |get memory with given ID for a user  with given user id  |         
| /users/{userId}/memory/{memoryId}                                      | Delete   | 204    |delete memory with given ID for a user  with given user id  |     

## Contributors
  * John Blalock
  * Marouane Khabbaz
  * Tanbir Ahmed

