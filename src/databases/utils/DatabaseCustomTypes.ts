import { FindOperator } from "typeorm";

export interface WhereObject {
    refClient?: string | FindOperator<string>;
    client?: string | FindOperator<string>;
}
