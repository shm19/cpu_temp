# PANTOhealth Final test

<br>

### For running this project you need to install 'nodemon' and then run 'npm install'

### after that run npm start

<br/>
<br/>

# send_tmp.js:

### This file contains the script wihch will get the tempreture of the cpus

### each 10 seconds and along with host by using a POST request to http://localhost:3000/api/v1/cpus/

### save the data into influx database.

### you can run it using 'node ./scripts/send_tmp.js'

<br>
<br>

# last_mins_temp.js

### This file contains the script wihch will get the last 5 miutes of tempertures which is written in influx database and calculate the average of them and save the data into mongodb database.

<br>
<br>

### you can get all mongodb records by sending post request to http://localhost:3000/api/v1/cpus

### or get the one you want using record id http://localhost:3000/api/v1/cpus/:id

<br>

### you can also send a post request to http://localhost:3000/api/v1/cpus to add tempreture record to influxdb

<br>

### mongodb runs with cloud
