import { HookContext } from '@feathersjs/feathers';
import { ADMIN } from '../../../constants/Roles';
const { Forbidden } = require('@feathersjs/errors/lib');

export const roleAccess = (roles: number | number[]) => async (context: HookContext) => {
    const { params } = context;
    const { user } = params;
    if (!user) {
        throw new Forbidden('You must be logged in to access this route. heheh');
    }
    if (!user.roles || !(user.role.includes(roles))) {
        return false;
    }

    return true;
};

