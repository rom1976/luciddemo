import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect,useRef } from "react";
import ItemCount from "./Count";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEgg} from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import Count from "./Count";


const Login = () =>{
 
     const [userID, setUserID] = useState('');
     const [password, setPassword] = useState('');
     const [userData, setUserData] = useState([]);
     const [message, setMessage] = useState('');
     const [loggedin, setLoggedIn] = useState(false);
     const [menulist, setMenuList] = useState([]);
     const [org,setOrg] = useState([]);
     const [searchTerm,setSearchTerm] = useState('');
     
     
     const menuRef = useRef([]);
     let orderCount =0;


     
   
    const submitHandler = () =>{
       
        axios.post('https://demo.lucidits.com/LUCIDAPI/V1/Login',{},{auth: {
             
              username: userID,
              password: password
            }})
      .then((response)=>{ 
         
          console.log(response.data);
          setUserData(response.data);
          if (userData.errorCode===1) throw (userData.message);

          //console.log(userData);
          setOrg(response.data.defaultPropertyName);
          setMessage('Login Success');
          sessionStorage.setItem('key', userData.lucidapiToken);
          console.log(sessionStorage.getItem('key'));
         
        })
        .catch((error)=>{
            setMessage(userData.message);
        })
       
 }
    

     const LoginHandler = (e) =>{
         setUserID(e.target.value);
         console.log(userID);
     }
     

     const LoginPasswordHandler =(e) =>{
        setPassword(e.target.value);
        console.log(password)
     }
  
    
    
     useEffect(()=>{
        if (userData.lucidapiToken)
        setLoggedIn(true);
        axios.get('https://demo.lucidits.com/LUCIDAPI/V1/GetOnlineOrderMenuItemListPageDetails',{
            headers: { Authorization: `Bearer ${userData.lucidapiToken}` } })
             .then((response)=>{
                 setMenuList(response.data.response.menuItems)
             }).then((Error)=> setMessage('Failed'));
     },[loggedin,userData])

     const mnItems = JSON.stringify(menulist);
     const mnItemsObj =  JSON.parse(mnItems);
     
     let temp='';
     
      if (loggedin){
          return(
                <>
                    <div className='container'>
                    <div className ='row'>
                        <h1>{org}</h1>
                           <h1 className='mb-4' style={{textAlign:"center"}}>Menu Items List</h1>
                              <div style={{height:'5rem', overflow:'hidden'}}>
                                   <input type="text" placeholder="seach..." onChange={ e=>setSearchTerm(e.target.value)} />
                              { 
                               mnItemsObj.map(a => a.itemName).filter((val) =>
                                  {
                                    if(searchTerm == ""){
        
                                       
                                     return
                                      }
                                    else if(val.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val;
                                         }
                                }).map((val,key)=>{
                                    return <div>{val} </div>
                                  })
                                  
                                  }
                                </div> 

                            { mnItemsObj.map((a,id) => {
                                return(
                                    <div className='col mb-3' >
                                <Card key ={id} border="primary" style={{ width: '19rem', textAlign:"center" }}>
                                <Card.Header key = {Math.random()} style = {{fontWeight:"bold"}}>  {a.itemName}</Card.Header>
                                <Card.Body key = {Math.random()}>
                                <Card.Title key = {Math.random()}> {a.itemRate}/- </Card.Title>
                                <Card.Text key = {Math.random()}>
                                
                                {a.foodTypeName==='Veg' &&  <FontAwesomeIcon icon={faSeedling} size='2x' color='green' /> }
                                {a.foodTypeName==='Non Veg' &&  <FontAwesomeIcon icon={faEgg} size='2x' color='yellow' /> }
                                </Card.Text>
                                {temp = a.itemName}
                                <Count init={orderCount+=1}/>

                              
                                 </Card.Body>
                             
                               </Card>
                               </div>
                                )
                              }
                              )}
                             
                      </div>
                                
                       
                    
                               </div>
                </>
          )
    
      }else{
    return(
        <>
           <div className='container'>
           <h1>{org}</h1>
               <div className='row'>
                   <div className='col-md-4'></div>
                   <div className='col-md-4'>
                       <div>
                           <h3>Login</h3>
                           <label>
                               User Name
                           </label>
                           <input type='text' name='loginName' placeholder='yourname' onChange={LoginHandler}/><br/>

                           <label>
                               Password
                           </label>
                           <input type ='password' name='loginPassword' placeholder='yourpassword' onChange={LoginPasswordHandler}/>
                           <Button type="button" className="btn btn-primary" onClick={submitHandler}>Submit</Button>
                       </div>
                   </div>
                   <div className='col-md-4'>
                     <h2> {message} </h2>
                   </div>
               </div>

           </div>
            
        </>
    )
      }

}

export default Login;
