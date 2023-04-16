import { HookContext } from '@feathersjs/feathers';

export const resetGame = () => async (context: HookContext) => {

    const { app, params } = context;
    const { user } = params;

    console.log(context.arguments)
    if (user) {
        const newScore = 0;
        await app.service('users').patch(user._id, { score: newScore });
        await app.service('puzzle').patch(context.arguments[0], { gameScore: newScore });
    }
    return context;
};