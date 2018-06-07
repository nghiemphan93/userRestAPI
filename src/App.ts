import express from "express";
import * as bodyParser from "body-parser";
import morgan from "morgan";
import router from "./routes/UserRoutes";


class App {
   public app: express.Application;

   constructor() {
      this.app = express();
      this.config();
   }

   private config(): void {
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({extended: false}));
      this.app.use(morgan("short"));
      this.app.use(express.static('public'));
      this.app.use(bodyParser.urlencoded({extended: false}));
      this.app.use(router)
   }

}

export default new App().app;


























