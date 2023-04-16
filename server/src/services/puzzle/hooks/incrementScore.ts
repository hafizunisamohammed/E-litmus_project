import { HookContext } from '@feathersjs/feathers';

export const incrementScore = () => async (context: HookContext) => {

    const { app, params, data } = context;
    const { user } = params;

    console.log(context.arguments[0])
    if (user) {
        const { score } = user;
        var newScore = score + 1;
        if (newScore > 4) newScore = 0;
        await app.service('users').patch(user._id, { score: newScore });
        await app.service('puzzle').patch(context.arguments[0], { gameScore: newScore });
    }
    return context;


};