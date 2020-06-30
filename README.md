This is a JavaScript database driven server application built using [ExpressJS](https://expressjs.com/)
## Architecture
This server application is organized with the *layered* architecture pictured below
![Architecture](https://github.com/dtm1015/F1-Explorer-Backend/blob/master/resources/Express-REST-API-Struc.png)
#### HTTP Layer:
* Consists of *Routers* and *Controllers*
* *Routers* have only one job: receive requests and pass them to the correct controllers
* *Controllers* recieve and parse HTTP requests, then send the required data to the ***Services Layer*** and wait for a response.
When a response comes from the lower layers, *Controllers* will build and send a HTTP response to the client. 

> The advantage in structuring the layers in this way is that the ***Services*** and ***Data*** layers don't need to be concerned
about the HTTP request/response cycle at all, that functionality is encapsulated entirely within the ***HTTP Layer***

#### Services Layer
* Consists of *Services*
* *Services* are where the implementation of any business logic should go.
* *Services* handle calls to the ***Data Layer*** as well as any external APIs or services

#### Data Layer
* Consists of DB connection configs as well as code for querying DB or accessing static resources
## API Routes

#### GET:
* /fastestlaps/:id
* /info/:id
* /racedates/:id
* /locations
* /driverPositions
