### HASHHOUND

# As this is a security program, the source code has been opened to ensure the only data stored from the user are the app labels and hashes of said labels.

# When using the app, the secretkey entered at the top of the page will encrypt any new labels and decrypt any selected old encryptions. If it is not unlocking an encryption, the application was probably encrypted with a different key.

However, as this code is not connected to any web app, it will not run on its own. When put into a javascript environment like electronJS or a web server, it should.

## The program is currently being secured further to prevent cross-site scripting attacks that front-end encryption methods are especially susceptible to.