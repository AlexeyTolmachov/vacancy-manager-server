"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = 3000;
// app.get("/", (req, res) => {
//   res.send("The Main Page");
// });
app_1.default.listen(port, () => console.log(`server is listening on ${port}`));
