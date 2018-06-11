"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mysql_1 = __importDefault(require("mysql"));
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.router = express_1.default.Router();
        this.setUpUserRoutes();
        this.pool = mysql_1.default.createPool({
            connectionLimit: 10,
            host: "localhost",
            user: "student",
            password: "student",
            database: "usersapi"
        });
    }
    UserRoutes.prototype.getMySqlConnection = function () {
        return this.pool;
    };
    UserRoutes.prototype.setUpUserRoutes = function () {
        var _this = this;
        // show form to create user
        this.router.get("/form", function (req, res) {
            res.render("form.ejs");
        });
        // create new user
        this.router.post("/userCreate", function (req, res) {
            var firstName = req.body.firstName;
            var lastName = req.body.lastName;
            var queryString = "INSERT INTO user (firstName, lastName) VALUES (?, ?)";
            _this.getMySqlConnection().query(queryString, [firstName, lastName], function (err, results, fields) {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                    return;
                }
                console.log("inserted new user with id: ", results.insertId);
                res.redirect("user/" + results.insertId);
            });
        });
        // get all users as JSON
        this.router.get('/users', function (req, res) {
            var queryString = "SELECT * FROM user";
            _this.getMySqlConnection().query(queryString, function (err, rows, fields) {
                console.log("fetched successfully");
                var users = rows.map(function (row) {
                    return {
                        firstName: row.firstName,
                        lastName: row.lastName
                    };
                });
                res.json(users);
            });
        });
        // get one user with ID as JSON
        this.router.get("/user/:id", function (req, res) {
            var queryString = "SELECT * FROM user WHERE user_ID = ?";
            var userID = req.params.id;
            _this.getMySqlConnection().query(queryString, [userID], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                    res.end();
                    return;
                }
                else {
                    var user = rows.map(function (row) {
                        return {
                            firstName: row.firstName,
                            lastname: row.lastName
                        };
                    });
                    res.json(user);
                }
            });
        });
        this.router.post('/', function (req, res) {
            var data = req.body;
            // query a database and save data
            res.status(200).send(data);
        });
    };
    return UserRoutes;
}());
exports.default = new UserRoutes().router;
//# sourceMappingURL=UserRoutes.js.map