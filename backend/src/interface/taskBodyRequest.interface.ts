import { Request } from "express";

export interface TaskBodyRequest<T> extends Request {
  body: {
    task: T
  };
}
