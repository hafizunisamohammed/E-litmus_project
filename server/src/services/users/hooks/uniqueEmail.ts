import { HookContext, hookMixin } from "@feathersjs/feathers";
import { BadRequest } from "@feathersjs/errors/lib";

export const uniqueEmail = () => async (context: HookContext) => {
    const { app, data } = context;
    const { email } = data;

    const existingUser = await app.service('users').find({ query: { email } });
    if (existingUser.total > 0) throw new BadRequest('Email address already exists');
    return context;

}