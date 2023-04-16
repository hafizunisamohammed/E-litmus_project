import { HookContext } from '@feathersjs/feathers';

export const userIdSet = () => async (context: HookContext) => {
    const { user } = context.params;
    context.data.user = user._id;
    return context;
};
