import { Router, Request, Response } from "express";
import { PostController } from "../resources/post/post.controllers";

const postRouter = Router();
const postController = new PostController();

postRouter.get('/', postController.makePost)

export default postRouter;