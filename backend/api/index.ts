import serverlessExpress from "@vendia/serverless-express";
import {app} from "../src/server"; // your Express app (without .listen)

export const handler = serverlessExpress({ app });
