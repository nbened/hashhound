import React, { useState } from "react";
import {v4 as uuidv4, v4} from 'uuid';
import { Typography, FormGroup, FormControlLabel, Checkbox, Button, TextField, Grid } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CryptoJS from 'crypto-js';

// build the form at the end needed to create each todo and add to the list
// construct what attributes the form will add for each task




export default function HashhoundForm( {addHashhound,secretkey} ) {  // brackets are important here!!

    // define what information will be stored in the array
    const [hashhound,setHashhound] = useState({
        id: "",
        application: "",
        password: "",
        hash: "",
        secretkey: "",
        clicked: false
    })

    function handleHashhoundChange(e){
        setHashhound({...hashhound,[e.target.name]: e.target.value}); 
    }
    

    function handleSubmit(e){
        // hash the password here, store hash in object, clear password

        console.log("pressed")
        e.preventDefault();

        if (hashhound.application.trim() && hashhound.password.trim() && secretkey.trim()) {

            //Encrypt to generate ciphertext
            var ciphertext = CryptoJS.AES.encrypt(JSON.stringify({id:1,text:hashhound.password}), secretkey).toString();

            addHashhound({ id: uuidv4(), hash: ciphertext, application: hashhound.application, clicked: hashhound.clicked}); // add project to friends
            setHashhound({ ...hashhound, password: "", application:"", hash:"", secretkey:"" });    // reset state
        }

    }

    return(

        <form onSubmit={handleSubmit} >
        <Grid container={true} borderTop={60} style={{"borderColor":"#282c34"}} align="center">
                <Grid item={true} xs={12}>
                    <Typography fontWeight={"bold"} fontSize={30} >
                        <span style={{"color":"white"}}> 3) Store </span>
                    </Typography>               
                </Grid>
                <Grid item={true} xs={12} borderTop={10} style={{"borderColor":"#282c34"}}>
                    <Typography fontWeight={"bold"} fontSize={15} >
                        <span style={{"color":"#78C1E5"}}>  Store new passwords </span>
                        <span style={{"color":"gray"}}> encrypted by your memorized key. </span>
                    </Typography>               
                </Grid>


                <Grid md={3}/>
                <Grid item={true} xs={12} md={3} border={10} style={{"borderColor":"#282c34"}}>
            
                    <TextField 
                    placeholder="Application"
                    value={hashhound.application} autoComplete='off' variant="outlined"
                    name="application" onChange={handleHashhoundChange} color="primary"
                    sx={{input: { color: 'white', textAlign:"center",textTransform:"capitalize"}}} />
                </Grid>



                <Grid item={true} xs={12} md={3} border={10} style={{"borderColor":"#282c34"}}>
   
                    <TextField 
                    value={hashhound.password} autoComplete='off' variant="outlined"
                    placeholder="App Password" autoCapitalize="false" type="password"
                    name="password" onChange={handleHashhoundChange} color="primary"
                    sx={{input: { color: 'white', textAlign:"center"}}} />       
                </Grid>
                <Grid md={3}/>



                <Grid item={true} xs={12} border={10} style={{"borderColor":"#282c34"}}>
                    <Button type="submit" fontWeight="bold" variant="filled" style={{color:"#282c34",backgroundColor:"#78C1E5","fontWeight":"bold"}} >Add Pair</Button>
                </Grid>
        
        </Grid>




        </form>

    )
}
