import { Button, Card, Shadow } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect} from "react";

import MenuItems from './MenuItems';

const Login = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");
  const [loggedin, setLoggedIn] = useState(false);
  const [menulist, setMenuList] = useState([]);
  const [org, setOrg] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const submitHandler = () => {
    axios
      .post(
        "https://demo.lucidits.com/LUCIDAPI/V1/Login",
        {},
        {
          auth: {
            username: userID,
            password: password,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
        if (userData.errorCode === 1) throw userData.message;

        //console.log(userData);
        setOrg(response.data.defaultPropertyName);
        setMessage("Login Success");
        sessionStorage.setItem("key", userData.lucidapiToken);
        console.log(sessionStorage.getItem("key"));
      })
      .catch((error) => {
        setMessage(userData.message);
      });
  };

  const LoginHandler = (e) => {
    setUserID(e.target.value);
    console.log(userID);
  };

  const LoginPasswordHandler = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  useEffect(() => {
    if (userData.lucidapiToken) setLoggedIn(true);
    axios
      .get(
        "https://demo.lucidits.com/LUCIDAPI/V1/GetOnlineOrderMenuItemListPageDetails",
        {
          headers: { Authorization: `Bearer ${userData.lucidapiToken}` },
        }
      )
      .then((response) => {
        setMenuList(response.data.response.menuItems);
      })
      .then((Error) => setMessage("Failed"));
  }, [loggedin, userData]);

  const mnItems = JSON.stringify(menulist);
  const mnItemsObj = JSON.parse(mnItems);
  console.log(Object.entries(mnItemsObj));

  if (loggedin) {
    return (
      <>
        <div className="container">
          <div className="row pb-3">
            <h1>{org}</h1>
            <h1 className="mb-4" style={{ textAlign: "center" }}>
              Menu Items List
            </h1>
              <div>
              <input
                type="text"
                placeholder="search..."
                onChange={(e) => {setSearchTerm(e.target.value);}}
              />
              </div>
            
               <div className='row mt-3'>
              
                   { searchTerm === "" && <MenuItems items={mnItemsObj}/>}
            {
              mnItemsObj
                .map((a, id) => a.itemName)
                .filter((val) => {
                 if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return  <MenuItems item = {val}/>  }
                  
                })
                .map((val, key) => {             
                    
                     const menVal =  mnItemsObj.filter((obj) => obj.itemName === val);
                     return  <MenuItems items ={menVal} />
                
                })}

            </div>
             
            </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container p-5">
          <h1>{org}</h1>
          <div className="row d-flex justify-content-center ">
            <div className="col-md-4"></div>
            <div className="col-md-4 h-100">

             <Card className= "mt-5 shadow-lg hoverable login-card">
              <Card.Body>
              <div>
              <h3>Login</h3>

                <form>
               <div class="input-group mb-3">
                   <div class="input-group-prepend">
                     <span class="input-group-text">User ID</span>
                   </div>
                   <input type="text" 
                   class="form-control"
                   name="loginName"
                   placeholder="yourname"
                   onChange={LoginHandler}/>
                   </div>

                   <div class="input-group mb-3">
                   <div class="input-group-prepend">
                     <span class="input-group-text">Password</span>
                   </div>
                   <input type="password" 
                   class="form-control"
                   type="password"
                   name="loginPassword"
                   placeholder="yourpassword"
                   onChange={LoginPasswordHandler}/>

                
                  
                </div>
               </form>

    
                <Button
                  type="button"
                  className="btn btn-primary"
                  onClick={submitHandler}
                >
                  Submit
                </Button>
              </div>
              
              
              </Card.Body>    
             </Card>
            </div>
            <div className="col-md-4">
              <h2> {message} </h2>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Login;
