import CryptoJS from 'crypto-js';
import React, { useEffect, useState, version } from "react";
import { Divider, Checkbox, IconButton,ButtonGroup, ListItem, NativeSelect, Typography, Grid, Button, LinearProgress, TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';

export default function HashhoundRetrieve({activehash,setSecretkey}){

    const [decipheredpassword,setDecipheredpassword] = useState("")
    const [decipherstate,setDecipherstate] = useState(false)

    const [key,setKey] = useState("")

    useEffect(() => {
        if (key.trim()){
            try{
                var bytes = CryptoJS.AES.decrypt(activehash, key);
                var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        
                setDecipheredpassword(decryptedData.text)
                console.log("match")
                setDecipherstate(true)
            }catch{
                console.log("nomatch")
                setDecipheredpassword("")
                setDecipherstate(false)
            }
        }
      }, [key,activehash])

    function handleDecipherParamChange(e){
        setKey(e.target.value); 
        setSecretkey(e.target.value)
    }

    return(

                <form>
                    <Grid container align="center">
                    <Grid item={true} xs={12} border={15} borderColor="#282C34">             
                        <Button  href="https://github.com/nbened/HashHound">

                            <span style={{"color":"#78C1E5"}}>  see github source code</span>

                        </Button>
                    </Grid>
                    <Grid item={true} xs={12} border={15} borderColor="#282C34">
                        <Typography fontWeight={"bold"} fontSize={30} >
                            <span style={{"color":"white"}}> 1) Unlock </span>
                        </Typography>               
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Typography fontWeight={"bold"} fontSize={15}  >
                            <span style={{"color":"gray"}}> Enter a </span>
                            <span style={{"color":"#78C1E5"}}> memorized master key. </span>

                        </Typography>               
                    </Grid>

                    
                    <Grid container align="center">

                        <Grid md={3}/>
                        <Grid xs={12} md={3} borderTop={20} borderColor="#282C34">
                            <TextField 
                            placeholder="Master Key" focused={decipherstate}
                            autoComplete='off' variant="outlined" type="password"
                            name="key" onChange={handleDecipherParamChange} color="primary"
                            sx={{input: { color: 'white', textAlign:"center"}}} />
                        </Grid>


                        <Grid xs={12} md={2} borderTop={20} borderColor="#282C34">
                            <TextField 
                            autoComplete='off' variant="standard" focused readonly
                            value={decipheredpassword} 
                            inputProps={
                                { readOnly: true, }
                            }
                            onChange={handleDecipherParamChange} color="primary"
                            sx={{input: { color: 'white', textAlign:"center"}}} />
                            <Typography fontWeight={"bold"} fontSize={15} >
                                <span style={{"color":"#78C1E5"}}> Decrypted Password </span>
                            </Typography>      
                        </Grid>
         

                        <Grid xs={12} md={1} borderTop={20} borderColor="#282C34">
                            <Tooltip title="copy hash">
                                <IconButton  onClick={() => {{navigator.clipboard.writeText(decipheredpassword)}}} style={{"color":"white"}}>
                                    <ContentCopyIcon/>
                                </IconButton >
                            </Tooltip>
                        </Grid>
                        <Grid md={3}/>

                        <Grid xs={12}>
                            
                            {!decipherstate ? "" : <Typography fontWeight={"bold"} fontSize={10} borderTop={15} borderColor="#282C34" >                                
                                <span style={{"color":"gray"}}>  Both of these are </span>
                                <span style={{"color":"#78C1E5"}}>  not stored</span>
                                <span style={{"color":"gray"}}>, just</span>
                                <span style={{"color":"#78C1E5"}}>  displayed</span>
                                <span style={{"color":"gray"}}>.</span>

                            </Typography>}

                        </Grid>
                      

                    </Grid>
                </Grid>

                </form>

    )
}

