# Contact App

This is a simple contact app to manage contacts using Sprint boot in the backend and Angular 6 in the frontend.
It has five modules:

* [contact](https://github.com/geraldoms/contact-app/tree/master/contact): 
 This module contains the contact service using spring boot that provides APIs to manage the contacts.

* [contact-ui](https://github.com/geraldoms/contact-app/tree/master/contact-ui): 
This module contains the ui project using Angular 6.

## Requirements
* JDK 8 or later
* Maven 3.2+

## Installation
Within the contact project:
`$ mvn package`

Within the contact-ui project:
`$ npm install`

## Usage 
Within the contact project:
`java -jar target/contact-0.0.1-SNAPSHOT.jar`

Within the contact-ui project:
`$ npm start`

## Usage example 

##### Getting all contacts.

Request:
```bash
curl http://localhost:8080/api/v1/contacts
```

Response:
```json
[
    {
        "id":1,
        "firstName":"Alex",
        "lastName":"Josh",
        "email":"ajosh@gmail.com",
        "phoneNumber":"(734) 234 7654"
    },
    {
        "id":2,
        "firstName":"Richard",
        "lastName":"Jackson",
        "email":"rjackson@gmail.com",
        "phoneNumber":"(734) 434 8798"
    },
    {
        "id":3,
        "firstName":"John",
        "lastName":"New",
        "email":"jnew@gmail.com",
        "phoneNumber":"(734) 675 8798"
    }
]
```

##### Accessing the UI.

When the application starts you can access it at `http://localhost:4200`.

![contact-ui](https://user-images.githubusercontent.com/13106549/47260480-806cf600-d48a-11e8-910f-4924cb9cf7da.png)
