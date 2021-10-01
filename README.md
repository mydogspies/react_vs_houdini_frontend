# REACT vs HOUDINI [frontend]

### A tiny case study of one way to use React as the web front to manipulate parameters in Houdini.

This repo is the React front end to this project. 

The goal is to try out one of many ways to use a web front end to directly manipulate parameters in SideFX Houdini. It is by no means the only way and the necessarily correct way. In this case I used vanilla react for the front end, Flask running on Houdini's own Hython (in this case we stick to the built-in Python 2.7.15 in Houdini version 18.5.596) and using the Hrpyc library within Houdini's python distro to make the connection.

** I will not maintain this particular repo so no point in filing code issues but feel free to comment on better ways of doing this particular hurdle. **

Here are some thoughts regarding the frontend part;
* React is backend agnostic so it does not matter what we use for backend. Establish API and bang it will work! No specific magic on this end.
* Flask is the content server and also starts the frontend. It may be odd but  the call to the front end is http://localhost:5000 even though React is running on port 3000 in the background. There is no specific design reason for this. Was just the way I set it from start to get up and running as fast as I could.
* All tested within Intellij so no guarantees it works in any other environment!




