# Hello!

# Install dependencies and running
 - Run 'npm install'
 - When dependencies have completed installing, run 'nodemon app.js'
 - Backend will start on port 3001

 # Test endpoint
 - curl http://localhost:3001/search \
    -H 'Content-type: application/json' \
    -d '{"searchText": "thomas"}' | json_pp