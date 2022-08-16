import { Checkbox, IconButton, ListItem, Typography, Grid, Button, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState, version } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import { styled, createTheme, ThemeProvider } from '@mui/system';
import * as React from 'react';
import Chip from '@mui/material/Chip';


export default function Hashhound({hashhound,removeHashhound,activateHash}){

    const [chipcolor,setChipcolor] = useState("#78C1E5")
    const [chipbackground,setChipbackground] = useState("#808080")

    useEffect(() => {
        if (hashhound.clicked){
            setChipcolor("#282c34")
            setChipbackground("#78C1E5")        
        }else{
            setChipcolor("#78C1E5")
            setChipbackground("#808080")       
        }
      }, [hashhound])

    function handleRemoveClick(){
        removeHashhound(hashhound.id)
    }

    function handleAppClick(){
        activateHash(hashhound.id,hashhound.hash)
    }


    return(
        // <div>
            // <h1>App: {hashhound.application}: </h1>

        //     <h5>Hash: {hashhound.hash} </h5>
        //     <h4>Copy Hash</h4>

        //     <h4>delete pair</h4>
        // </div>
        <Grid container={true} align="center">

            <Grid item={true} xs={12} border={15} style={{"borderColor":"#282c34"}}>
                <Tooltip title={hashhound.hash}>
                    <Chip onClick={handleAppClick} onDelete={handleRemoveClick}
                    style={{"backgroundColor":chipbackground,"color":chipcolor,"fontSize":15, textTransform:"capitalize"}}
                     label={hashhound.application}
                     />         
                </Tooltip>
            </Grid>

            
        </Grid>
    )
}

{/* <Grid item={true} xs={2}>
<IconButton onClick={() => {{navigator.clipboard.writeText(hashhound.hash)}}} style={{"color":"white"}}>
    <ContentCopyIcon/>
</IconButton >
</Grid> */}