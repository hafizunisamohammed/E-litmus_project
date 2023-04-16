import { HookContext } from '@feathersjs/feathers';

export const initialScoreSetter = () => async (context: HookContext) => {

    console.log(context.score);
    context.data.score = 0;
    return context;
};
