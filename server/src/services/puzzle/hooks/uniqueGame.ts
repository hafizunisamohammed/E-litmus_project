import { HookContext, hookMixin } from "@feathersjs/feathers";
import { BadRequest } from "@feathersjs/errors/lib";

export const uniqueGame = () => async (context: HookContext) => {
    const { app, data } = context;
    const { email } = data;

    const existingGame = await app.service('puzzle').find({ query: { email } });
    if (existingGame.total > 0) throw new BadRequest('User Game already exists');
    return context;

}