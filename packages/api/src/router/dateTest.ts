import { z } from "zod";

import { publicProcedure } from "../trpc";

export const dateTestRouter = {
  get: publicProcedure
    .input(z.object({ testDate: z.date() }))
    .query(({ input }) => {
      console.log("input.testDate", input.testDate);
      return { outputDate: new Date() };
    }),
  update: publicProcedure
    .input(z.object({ testDate: z.date() }))
    .mutation(({ input }) => {
      console.log("input.testDate", input.testDate);
      return { outputDate: new Date() };
    }),
};
