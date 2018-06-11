"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.config();
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(morgan_1.default("short"));
        this.app.use(express_1.default.static('public'));
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(UserRoutes_1.default);
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=App.js.map