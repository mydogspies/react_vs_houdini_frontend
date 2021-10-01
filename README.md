# REACT vs HOUDINI - frontend

### A tiny case study of one way to use React as the web front to manipulate parameters in Houdini.

This repo is the React front end to this project. 

The goal is to try out one of many ways to use a web front end to directly manipulate parameters in SideFX Houdini. It is by no means the only way and the necessarily correct way. In this case I used vanilla react for the front end, Flask running on Houdini's own Hython (in this case we stick to the built-in Python 2.7.15 in Houdini version 18.5.596) and using the Hrpyc library within Houdini's python distro to make the connection.

** I will not maintain this particular repo so no point in filing code issues but feel free to comment on better ways of doing this particular hurdle. **

Here are some thoughts regarding the frontend part;
* React is backend agnostic so it does not matter what we use for backend. Establish API and bang it will work! No specific magic on this end.
* Flask is the content server and also starts the frontend. It may be odd but  the call to the front end is http://localhost:5000 even though React is running on port 3000 in the background. There is no specific design reason for this. Was just the way I set it from start to get up and running as fast as I could.
* All tested within Intellij on Windows 10 Pro so no guarantees it works in any other environment!

HOW TO INSTALL AND RUN

So no guarantees and only tested on Windows and within Intellij;

These are the three repos you need;
* https://github.com/mydogspies/react_vs_houdini_backend
* https://github.com/mydogspies/react_vs_houdini_frontend
* https://github.com/mydogspies/react_vs_houdini_projectfiles


* Clone all *three* REACT vs HOUDINI repos to somewhere on your disc.
* **In the Flask BACKEND**; change the paths in the config.py to match with wherever you saved the project files to and your Houdini install dir (path://to/Houdini 18.5.xxx/)
* **In the Flask BACKEND**; Set the Python interpreter within your Intellij project settings to Hython - which you find in path/to/Houdini 18.5.xxx/bin/hython.exe. It will NOT work!
* **Inside of the React FRONTEND**; run *npm install* followed by *npm run build*. NOTE: Flask runs the build dir as a static site. You need to build for every change.

SPECIFICALLY for INTELLIJ on WINDOWS

* Start the React frontend in dev mode by simply doing a *npm start* in the FRONTEND dir. Intellij will automatically open the site under port 3000 in your browser. Close this.
* Start the Flask server by running the app.py from within Intellij with the **Run** (shift + F10 on win) command. Note that doing a "flask run" starts Flask with the wrong python interpreter, at least on my dev machine and by using the Intellij run command you force Flask with whatever interpreter you chose as part of your project settings.
* Open the React frontend using http://localhost:5000

HOW IT WORKS IN PRACTICE

The React frontend simply sends API calls and is completely unaware of the backend. The Flask backend deals with the API endpoints and then uses Hrpyc to directly send and receive commands from Houdini. Hrpyc is pretty much a wrapper for the Hou module, the Houdini API.

This solution has one big caveat! It only works if the Hrpyc server is already running and that can only be started from WITHIN Houdini. In the scripts sub-folder of the projects files is a super short script that does just that on starting up Houdini - starts the server. That is why I added a button to open Houdini on the front end - to make sure Houdini is configured for the communication with the outer world.

FINAL DISCLAIMER

This project is just a simple proof of concept I wrote in one evening and not meant to be production code. There are for sure much better ways to establish a React to Houdini pipeline and I would love to hear from anyone about your solution. Just drop a message in the issues in any of the three repos. 
