import React,{useState} from 'react'
import './Register.css';
// import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Register() {

    const navigate =useNavigate();
    const [user,setUser] = useState({
        name:"",username:"",address:"",phone:"",email:"",dateOfBirth:""
    });

    let name,value;
    const handleInputs =  (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();
        const {name ,username ,address ,phone ,email ,dateOfBirth } = user;
        
        const res = await fetch("/register", {
            method:"POST",
            // mode: 'no-cors',
            headers:{
                "Content-Type": "application/json",
                'Accept': 'application/json' 
            },
            
            body:JSON.stringify({
                name ,username ,address ,phone ,email ,dateOfBirth
            })
            
        });
        const data1 = await res.json(); 
        console.log(res.status);
        console.log(data1.message);
        if(res.status===401 || !data1){
            window.alert(data1.message);
        } else {
            window.alert(data1.message);
            navigate('/');
            
        }
    }



    return (
        <div className="body">
        <h1 align="center">User Registration Form</h1>
            <form action='/' method="POST">
                <table align="center" cellSpacing="5px" cellPadding="8%">
                    <tbody>
                    <tr>
                        <td><label htmlFor='name'>Name : </label></td>
                        <td>
                            <input type="text" name="name" className="input1" 
                            value={user.name}
                            onChange={handleInputs}
                            placeholder="Enter Your Name" required />
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="username">Username : </label></td>
                        <td><input type="text" name="username" className="input1" 
                        value={user.username}
                        onChange={handleInputs}
                        placeholder="Enter Your Username" required /></td>

                    </tr>
                    <tr>
                        <td><label htmlFor="username">Address :</label> </td>
                        <td><textarea name="address" id="" className="input1" cols="20" rows="5" 
                        value={user.address}
                        onChange={handleInputs}
                        placeholder="Enter Address" required ></textarea></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="phone">Phone Number : </label></td>
                        <td>
                            <input type="text" name="phone" id="" className="input1" 
                            value={user.phone}
                            onChange={handleInputs}
                            placeholder="Enter Your Phone Number" required />
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email Id : </label></td>
                        <td><input type="text" name="email" id="" className="input1" 
                        value={user.email}
                        onChange={handleInputs}
                        placeholder="Enter your Email Id" required /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="dateOfBirth">Data of Birth :</label></td>
                        <td><input className="input1" type="date" name="dateOfBirth" id="date" 
                        value={user.dateOfBirth}
                        onChange={handleInputs}
                        placeholder="DD-MM-YYYY" required /></td>
                    </tr>
                    <tr >
                        <td></td>
                        <td>
                            <button className="submit" type='submit' onClick={PostData}>
                                Submit
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>

        </div>
    )
}
