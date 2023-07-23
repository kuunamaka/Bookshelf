import express, { type Express, type Request, type Response } from "express";
import dotenv from "dotenv";
import * as OpenApiValidator from "express-openapi-validator";
import path from "path";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.use(
  OpenApiValidator.middleware({
    apiSpec: path.join(__dirname, "../../openapi.yaml"),
    validateRequests: true,
    validateResponses: false,
  })
);

app.post("/samples", function (req, res, next) {
  console.log("Here's samples post roots");
  return res.json({ message: "success" });
});

app.use((err: any, req: any, res: any, next: any) => {
  res.status(404).json({
    message: err.message,
    errors: err.errors,
  });
  console.log("running here");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
