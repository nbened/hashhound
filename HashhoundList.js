import Hashhound from "./Hashhound"
import { Checkbox, IconButton, Divider, ListItem, Typography, Grid } from "@mui/material";
import React, { useEffect, useState, version } from "react";

export default function HashhoundList({hashhounds,removeHashhound,activateHash}){
    console.log(hashhounds)




        
   var hashhoundlist = hashhounds.map(hashhound => {return (
            <Hashhound 
            key={hashhound.id}
            hashhound={hashhound} 
            removeHashhound={removeHashhound}
            activateHash={activateHash}
            />
        )})


    return(
        <Grid container={true} align="center" >


            <Grid item={true} xs={12} borderTop={60} borderColor="#282C34">
                <Typography fontWeight={"bold"} fontSize={30} >
                    <span style={{"color":"white"}}> 2) Select </span>
                </Typography>               
            </Grid>
            <Grid item={true} xs={12} borderTop={10} style={{"borderColor":"#282c34"}}>
                <Typography fontWeight={"bold"} fontSize={15} >
                    <span style={{"color":"#78C1E5"}}>  Select the application</span>
                    <span style={{"color":"gray"}}>  you want to decrypt. </span>
                </Typography>               
            </Grid>
            
            <Grid item={true} xs={12}  borderTop={15} borderColor="#282C34">
                {hashhoundlist.length ? hashhoundlist : <Typography fontWeight={"bold"} fontSize={15} color="gray" >~ No stored passwords yet ~</Typography>}
            </Grid>

            {/* {user ? <HashhoundPage user={user}/> : <SignIn />} */}

            <Grid item xs={12} borderTop={15} borderColor="#282C34">
                {!hashhoundlist.length ? hashhoundlist : <Typography fontWeight={"bold"} fontSize={10} >
                        <span style={{"color":"gray"}}>  We just store the </span>
                        <span style={{"color":"#78C1E5"}}> label and encryption</span>
                        <span style={{"color":"gray"}}>. We don't even have usernames.  </span>

                    </Typography>    }

                

            </Grid>

        </Grid>
    )
}