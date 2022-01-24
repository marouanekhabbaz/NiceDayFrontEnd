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


## Contributors
  * John Blalock
  * Marouane Khabbaz
  * Tanbir Ahmed



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




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# Nice-day-front-end
