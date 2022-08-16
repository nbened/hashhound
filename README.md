# HASHHOUND

## Purpose
Hashhound is meant to serve as an open source password manager. Encrypt different passwords for different sites and store them in a list. When ready to login, just unencrypt with given key.

# How To
When using the app, the secretkey entered at the top of the page will encrypt any new labels and decrypt any selected old encryptions. If it is not unlocking an encryption, the application was probably encrypted with a different key.

## Open Source Purpose
As this is a security program, the source code has been opened to ensure the only data stored from the user are the app labels and hashes of said labels.

These javascript files are not connected to any web app, and will not run on their own. When put into a javascript environment like electronJS or a web server, they will. This has been done for the user on kotaai.web.app

## Security
 The program is currently being secured further to prevent cross-site scripting attacks that front-end encryption methods are especially susceptible to.