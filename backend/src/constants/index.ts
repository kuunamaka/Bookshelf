import express, { type Express, type Request, type Response } from "express";
import dotenv from "dotenv";
import * as OpenApiValidator from "express-openapi-validator";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(
  OpenApiValidator.middleware({
    apiSpec: "../../../openapi.yaml",
    validateRequests: true,
    validateResponses: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  console.log("running get /");
  res.send(test);
  res.send("Express + TypeScript Server is Built!!");
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});

app.get("/samples", (req: Request, res: Response) => {
  console.log("running get /sample");
  res.send("Here's samples get roots");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// app.post("/samples", function (req, res, next) {
//   console.log("Here's samples post roots");
// });

app.use((err: any, req: any, res: any, next: any) => {
  res.status(404).json({
    message: err.message,
    errors: err.errors,
  });
  console.log("running here");
});
