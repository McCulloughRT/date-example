import { authRouter } from "./router/auth";
import { dateTestRouter } from "./router/dateTest";
import { postRouter } from "./router/post";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,
  dateTest: dateTestRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
