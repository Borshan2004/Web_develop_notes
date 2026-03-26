/**
 * 
 * simple but not the best way
 * 1. form client side sent information
 * 2.generate token jwt.sign()
 * 3.on the ci=lient side set token to the localstorege
 *  
 * 
 * using http only cookies 
 * 1.first install npm i cookie-parser
 * 2.set cors middleware to allow cookies for our clientside
 * 
 * 1.form client side sent the information (email,better: firebase er auth ar token) to gererate token
 * 2.on the server side ,accept user information and if needed validate it 
 * 3. gererate token in the server side using secret and expiresIn
 * 
 * 
 * set the cookies
 * 4.while calling the api tell to use withCredetials
 * 
 * axios.post('http://localhost:3000/jwt', userdata,{
                    withCredentials:true
                })
 * 
 *  5. in the cors setting set credentials and origin
 *    app.use(cors({
 *    origin:['http://localhost:5173/'],
     credentials:true
 }))
 * 
   6.after gerating the token set it to the cookies sith samw options
 
 
 
     7.one time:  use cookiesParser as middleware
     8.fir every api you want to verify token: in the client side :if using axios withCredentilas :true
     for fetch : credentials include

     verify

     8.check token exists if not return 401->>unauthorized
    
    9. jwt verify function if err return 40 -->unauthorized
    10. if token is valid set the decoded value to the req object
    11. if data aking for doesnt match with the owner or bearer of the token --> 403 ->>forbidden access




    3 approach  to jwt


    1.generate jwt token -> sent to the client - > store it in the local storage -> send t  he token to the server using header -> on the server verify token


    Best approch in general
    2.gererate token - >set token the cookies -> ensure client and server exchanges cookies -> on the server verify token 

    
 
    firebase authentication approach
    
    3.already have the token in firebase client side > when needed we wil send the token to the server  using auth header - > verify the token



   *
   *
   */