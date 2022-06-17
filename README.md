**Get Started**

* Clone repository with command git clone <https://github.com/zarr20/cp-bangkit-c22-ky03-traveloka-ocr-cc.git> and next, type code .
* Move to directory cp-bangkit-c22-ky03-traveloka-ocr-cc **cd cp-bangkit-c22-ky03-traveloka-ocr-cc**
* Install dependencies using command **npm install**
* .env
* Running the server **npm run start**


**API**

**Authentication User**

* **Register**
    + method : **POST**
    + endpoint : /register
    + body : JSON
    + body request :
      ```
        "name" :  string
        "email" :  string
        "password" : string 
        "ConfPassword" : string
      ```
    + body response :
      ```
      "msg": "Register Berhasil"
      ```
    If the password and confPassword are not the same it will
       ```
      "msg": "Password dan Confirm Password tidak cocok"
      ```

* **Login**
    + method : **POST**
    + endpoint : /auth
    + body : JSON
    + body request :
      ```
        "email" :  string
        "password" : string 
        "ConfPassword" : string
      ```
    + body response :
      ```
      "msg": "Login Berhasil"
      ```
    
 * **Get Refresh Token**
    + method : **GET**
    + endpoint : /token
    + body : JSON
    + body request :
      ```
     
      ```
    + body response :
      ```
      "msg": " "
      ```
    
  * **Get User By ID**
    + method : **GET**
    + endpoint : /users/:id
    + body : JSON
    + body request : 
      ```
       {
            "id": 2, 
            "name": {…},
            "email": {…},
            "password":"$2b$10$...”, 
            "refresh_token": null, 
            "createdAt": "2022-06-10T04:24:59.000Z", 
            "updatedAt": "2022-06-10T04:24:59.000Z"
        }

      
      ```
    + body response :
      ```
      "msg": " "
      ```
    
  * **Logout**
    + method : **DELETE**
    + endpoint : /logout
    + body : JSON
    + body request :
      ```
        "refreshToken" : 
      ```
    + body response :
      ```
      "msg": " "
      ```
    
  **Authentication Admin**
  
 * **Login**
    + method : **POST**
    + endpoint : /admin/login
    + body : JSON
    + body request :
      ```
        "email" :  string
        "password" : string 
        "ConfPassword" : string
      ```
    + body response :
      ```
      "msg": "Login Berhasil"
      ```
    
 * **Logout**
    + method : **DELETE**
    + endpoint : /admin/logout
    + body : JSON
    + body request :
      ```
       "refreshToken" : 
      ```
    + body response :
      ```
      "msg": " "
      ```
  
  
 **ID Card (Auth Require)**
 
 + method : **GET**
    + endpoint : /ktp
    + body : JSON
    + authorization :
          - type :
    + body request :
      ```
      {
          "nik" : {…},
          "name" : {…},
          "ttl" : {…},
          "jenis" : {…},
          "alamat" : {
                "alamat": {…},
                "kel": {…},
                "kec": {…},
      },
          "agama" : {…},
          "status" : {…},
          "pekerjaan" : {…},
          "kwn" : {…},
          "createdAt": "2022-06-10T04:24:59.000Z", 
          "updatedAt": "2022-06-10T04:24:59.000Z"
      }

      ```
    + body response :
      ```
      "msg": " "
      ```
    
**Count ID Card**
 
 + method : **GET**
    + endpoint : /ktp/count
    + body : JSON
    + body request :
      ```
    
      ```
    + body response :
      ```
      "msg": " "
      ```
    
 **Get ID Card By NIK**
 
 + method : **GET**
    + endpoint : /ktp/:nik
    + body : JSON
    + body request :
      ```
    
      ```
    + body response :
      ```
      "msg": " "
      ```
 
**Get ID Card By ID**
 
 + method : **GET**
    + endpoint : /ktp/id/:id
    + body : JSON
    + body request :
       ```
         data 
         {
             "id" : {1},
             "nik" : {…},
             "name" : {…},
             "ttl" : {…},
             "jenis" : {…},
             "alamat" : {
                    "alamat": {…},
                    "kel": {…},
                    "kec": {…},
            },
            "agama" : {…},
            "status" : {…},
            "pekerjaan" : {…},
            "kwn" : {…},
            "createdAt": "2022-06-10T04:24:59.000Z", 
            "updatedAt": "2022-06-10T04:24:59.000Z"
         }
      ```
    + body response :
      ```
      "msg": " "
      ```
    
**Edit ID Card**
 
 + method : **POST**
    + endpoint : /ktp
    + body : JSON
    + body request :
      ```
    
      ```
    + body response :
      ```
      "msg": " "
      ```
    
**Update ID Card By ID**
 
 + method : **PATCH**
    + endpoint : /ktp/:id
    + body : JSON
    + body request :
    
      ```
       {
            "nik" : {…},
            "name" : {…},
            "ttl" : {…},
            "jenis" : {…},
            "alamat" : {
                 "alamat": {…},
                 "kel": {…},
                 "kec": {…},
       },
            "agama" : {…},
            "status" : {…},
            "pekerjaan" : {…},
            "kwn" : {…},
            "createdAt": "2022-06-10T04:24:59.000Z", 
            "updatedAt": "2022-06-10T04:24:59.000Z"
        }
      ```
    
    + body response :
    
      ```
      "msg": "Data KTP Updated"
      ```
 
 **Status ID Card**
 
 + method : **PATCH**
    + endpoint : /ktp/:id/:status
    + body : JSON
    + body request :
      ```
    
      ```
    + body response :
      ```
      "msg": " "
      ```
    
**Upload File ID Card**
 
 + method : **POST**
    + endpoint : /upload/ktp
    + body : JSON
    + body request :
      ```
    
      ```
    + body response :
      ```
      "msg": " "
      ```
