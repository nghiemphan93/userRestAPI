# Instruction
1. Install MySql and MySql Workbench then create a user with:
    * user name: "student"
    * password: "student"
2. Create a local connection with the above user then run the Script from /Script.sql
3. Install modules: npm install
4. Start server: npm run mon

## Routes
    * /users        return all users from database
    * /user/:id     return one user according to the id
    * /form         create one user, the redirect to user/:id of that user

# How to compile js files and run with nodemon
npm run mon

# How to directly run ts file with nodemon
nodemon

