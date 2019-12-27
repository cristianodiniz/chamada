import Validator from "schema-validator";
import { RegexPatterns } from "../utils/utils";

export const validateOrganization = organization => {
    const schema = {
        name: {
            type: String,
            required: true,
            length: {
                min: 4,
                max: 20
            },
            test:  /^[a-zA-Z0-9]+$/gi
        },

        email: {
            type: String,
            required: true,
            length: {
                min: 4,
                max: 20
            },
            test: RegexPatterns.Email.regex
        },
        password: {
            type: String,
            required: true,
            length: {
                min: 8,
                max: 10
            },
            test: RegexPatterns.Password.regex
        }
    };

    const validator = new Validator(schema);
    validator.debug = true;
    return validator.check(organization);
};
