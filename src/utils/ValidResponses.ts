// TODO: improve format to apply a translation.
export const VALID_RESPONSES = {
    ERROR: {
        AUTH: {
            TOKEN: {
                APP: "error.auth.token.app",
                USER: "error.auth.token.user"
            },
            UNPRIVILEGED: "error.auth.unprivileged"
        },
        EXIST: {
            ADDRESS: "error.exist.address",
            CLIENT: "error.exist.client"
        },
        NOT_DELETED: "error.not_deleted",
        NOT_EXIST: {
            ADDRESS: "error.not_exist.address",
            CLIENT: "error.not_exist.client"
        },
        PARAMS: {
            MALFORMED: {
                ORDERBY: "error.params.malformed.orderby"
            },
            MISSING: "error.params.missing"
        },
        UNRECOGNIZED: "error.unrecognized",
        VALIDATION: {
            ID: "error.validation.id",
            NAME: "error.validation.name",
            URL: "error.validation.url"
        }
    }
};
