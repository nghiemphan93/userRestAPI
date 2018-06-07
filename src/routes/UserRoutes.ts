import {Connection, FieldInfo, MysqlError, Pool} from "mysql";
import express, {Request, Response} from "express";
import mysql from "mysql";

class UserRoutes {
   public router = express.Router();
   public pool: Pool;

   public constructor() {
      this.setUpUserRoutes();
      this.pool = mysql.createPool({
         connectionLimit: 10,
         host: "localhost",
         user: "student",
         password: "student",
         database: "usersapi"
      });
   }

   private getMySqlConnection(): Pool {
      return this.pool;
   }

   private setUpUserRoutes(): void {
      // show form to create user
      this.router.get("/form", (req: Request, res: Response) => {
         res.render("form.ejs");
      });

// create new user
      this.router.post("/userCreate", (req: Request, res: Response) => {
         const firstName = req.body.firstName;
         const lastName = req.body.lastName;

         const queryString = "INSERT INTO user (firstName, lastName) VALUES (?, ?)";
         this.getMySqlConnection().query(queryString, [firstName, lastName], (err, results, fields) => {
            if (err) {
               console.log(err);
               res.sendStatus(500);
               return
            }

            console.log("inserted new user with id: ", results.insertId);
            res.redirect(`user/${results.insertId}`);
         });
      });

// get all users as JSON
      this.router.get('/users', (req: Request, res: Response) => {
         const queryString = "SELECT * FROM user";
         this.getMySqlConnection().query(queryString, (err: MysqlError, rows: any, fields: FieldInfo[]) => {
            console.log("fetched successfully");

            const users = rows.map((row: any) => {
               return {
                  firstName: row.firstName,
                  lastName: row.lastName
               }
            });

            res.json(users);
         });
      });

// get one user with ID as JSON
      this.router.get("/user/:id", (req: Request, res: Response) => {
         const queryString = "SELECT * FROM user WHERE user_ID = ?";
         const userID = req.params.id;

         this.getMySqlConnection().query(queryString, [userID], (err, rows, fields) => {
            if (err) {
               console.log(err);
               res.sendStatus(500);
               res.end();
               return;
            } else {
               const user = rows.map((row: any) => {
                  return {
                     firstName: row.firstName,
                     lastname: row.lastName
                  };
               });

               res.json(user);
            }
         });
      });

      this.router.post('/', (req: Request, res: Response) => {
         const data = req.body;
         // query a database and save data
         res.status(200).send(data);
      });
   }
}

export default new UserRoutes().router;