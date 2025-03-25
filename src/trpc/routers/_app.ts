import { z } from "zod";
import { protectedProcedure, createTRPCRouter } from "../init";
// import { TRPCError } from "@trpc/server";

export const appRouter = createTRPCRouter({
  hello: protectedProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      // throw new TRPCError({code:"BAD_REQUEST"})
      console.log("db user",opts.ctx.user)
      return {
        greeting: ` hello ${opts.input.text}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
