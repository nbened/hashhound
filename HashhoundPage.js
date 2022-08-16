

// top of page has a dropdown to select application, input for key, a submit button, 
// and display port for plain text with copy button next to it

// bottom of page has list of hashes with companies. this list can be added via form.
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import HashhoundRetrieve from './HashhoundRetrieve'
import HashhoundForm from './HashhoundForm'
import HashhoundList from './HashhoundList'
import React, { useEffect, useState, version } from "react";
import firebase from 'firebase/compat/app';
import { collection , onSnapshot, setDoc, doc } from 'firebase/firestore';


export default function HashhoundPage(){
    const firestore = firebase.firestore();
    const { uid, email, displayName, emailVerified } = firebase.auth().currentUser;

    const [hashhounds,setHashhounds] = useState([])
    const [activehash,setActivehash] = useState("")
    const [secretkey,setSecretkey] = useState("")

    
    useEffect(() => {

      firestore.collection("userdata")
      .doc(uid) 
      .get().then(res=>{

          setHashhounds(JSON.parse(res.data().storedhashhounds))
      })
    }, []);
  
 
    function addHashhound(hashhound) {

        let storedhashhounds = JSON.stringify([hashhound, ...hashhounds])
        setDoc(doc(firestore, "userdata", uid), {
          email,
          emailVerified,
          displayName,
          storedhashhounds
        });
        setHashhounds([hashhound, ...hashhounds]);
      }

      function removeHashhound(id){
        let storedhashhounds = JSON.stringify(hashhounds.filter(hashhound=>hashhound.id !== id))
        setDoc(doc(firestore, "userdata", uid), {
          storedhashhounds
        });
        setHashhounds(hashhounds.filter(hashhound=>hashhound.id !== id));
      }

      function activateHash(id,hash){
        setActivehash(hash)

        setHashhounds(hashhounds.map(hashhound=>{
          console.log(hashhound)
          if(hashhound.id === id){
            console.log("match:")
            console.log(hashhound)
           
            return{
              ...hashhound,
              clicked: true
            }
          }else{
            return {
              ...hashhound,
              clicked: false
            }

          }
        })
      )}

    return(
        <div>
            <HashhoundRetrieve hashhounds={hashhounds} activehash={activehash} setSecretkey={setSecretkey}/>
            <HashhoundList hashhounds={hashhounds} removeHashhound={removeHashhound} activateHash={activateHash}/>
            <HashhoundForm addHashhound={addHashhound} secretkey={secretkey}/>
        </div>
    )
}