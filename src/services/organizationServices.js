import { validateOrganization } from "../schemas";

export const createOrganization = (organization) => {
    return new Promise((resolve, reject) => {
        const validate = validateOrganization(organization);
        if (validate._error) {
            reject(validate);
        } else {
            resolve();
        }
    });
};
