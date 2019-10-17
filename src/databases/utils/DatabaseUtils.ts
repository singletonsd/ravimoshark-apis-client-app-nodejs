import { BaseEntity, FindManyOptions, FindOneOptions, Like, ObjectType } from "typeorm";
import { Deleted } from "../../models";
import { LoggerUtility } from "../../utils/LoggerUtility";
import { ParametersComplete } from "../../utils/utilities";
import { Addresses, Clients } from "../entities";
import { WhereObject } from "./DatabaseCustomTypes";

export class DatabaseUtilities {
  public static getFindOneObject(id: number | string, deleted: Deleted, entity: ObjectType<BaseEntity>
                              ,  relations?: Array<string>): FindOneOptions {
    const whereObject: { id?: number | string, refClient?: number | string } = { };
    if (entity === Clients) {
      whereObject.refClient = id;
    } else {
      whereObject.id = id;
    }
    const object: FindOneOptions<typeof entity> = {
      where: this.addDeletedParam(deleted, whereObject)
    };
    object.relations = this.addRelations(entity, relations);
    return object;
  }

  public static getFindObject(
    params: ParametersComplete, entity: ObjectType<BaseEntity>,
    relations?: Array<string>, selections?: Array<string>): FindManyOptions {
    const whereObject = this.addWhereCondition(entity, params.filterBy);
    const object: FindManyOptions<typeof entity> = {
      skip: params.skip,
      take: params.limit,
      where: this.addDeletedParam(params.deleted, whereObject)
    };
    if (params.refClient) {
      this.addParam("client", params.refClient.toLocaleUpperCase(), object.where);
    }
    if (params.orderBy) {
      let order: object;
      try {
        order = JSON.parse(params.orderBy);
      } catch (e) {
        order = { id: params.orderBy };
      }
      if (order) {
        object.order = order;
      } else {
        return null;
      }
    }
    object.relations = this.addRelations(entity, relations);
    // object.select = this.addSelections(entity, selections);
    return object;
  }

  public static addWhereCondition(entity: ObjectType<BaseEntity>, filter: string
                                , whereObject: WhereObject = { }): any {
    if (!filter) {
      return whereObject;
    }
    filter = filter.toLocaleUpperCase();
    try {
      whereObject = JSON.parse(filter);
      return whereObject;
    } catch (e) {
      LoggerUtility.warn("filterBy parameter provided is not in JSON format.", filter);
    }
    if (entity === Addresses) {
      // whereObject = `refClient LIKE %${filter}%`;
      whereObject.client = Like(`%${filter}%`);
    } else if (entity === Clients) {
      whereObject.refClient = Like(`%${filter}%`);
    }
    return whereObject;
  }

  public static addDeletedParam(deleted: Deleted, params: any): object {
    if (!params) {
      params = {};
    }
    switch (deleted) {
      case Deleted.ALL:
        break;
      case Deleted.DELETED:
        params.deleted = true;
        break;
      case Deleted.ACTIVE:
        params.deleted = false;
        break;
    }
    return params;
  }

  public static addParam(parameter: string, value: string, params: any): object {
    if (!params) {
      params = {};
    }
    if (value) {
      params[parameter] = value;
    }
    return params;
  }

  public static addRelations(entity: ObjectType<BaseEntity>, relations?: Array<string>): Array<string> {
    let finalRelations: Array<string>;
    if (relations) {
      finalRelations = relations;
    } else if (entity === Addresses) {
      finalRelations = [ "client" ];
    } else if (entity === Clients) {
      finalRelations = [ "addresses" ];
    }
    return finalRelations;
  }

  public static addSelections(entity: ObjectType<BaseEntity>, relations?: Array<string>): Array<string> {
    let finalSelections: Array<string> = new Array<string>();
    if (relations) {
      finalSelections.push(...relations);
    } else if (entity === Addresses) {
      finalSelections = [];
    } else if (entity === Clients) {
      // finalSelections.filter((key) => !key.includes("__"));
      finalSelections = ["refContract", "client.refClient"];
    }
    return finalSelections;
  }
}
