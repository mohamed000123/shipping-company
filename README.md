# shipping-company
delivery-service app with these features
* authentication & authorisation (for users and bikers)
* user features
    * create parcel
    * see his parcels
    * see parcel status over time (created,pickedUp and delivered)
    * filter parcels by type

* biker features
    * see all available parcels
    * pick up a parcel
    * mark it as delivered
    * see his delivered and booked parcels


* core service running
    * run npm i command
    * run nodemon index.js command
    * add .env file with this structure
  
        DB_USER = (your MYSQL database user name)
  
        DB_PASSWORD = (your MYSQL database password)
  
        SECRET_KEY = (any string)  (add any secret key for jwt signature)
  
    * if you are using any other SQL DB you can replace it with MYSQL in sequlize config file (/models/dbConnection.js)
