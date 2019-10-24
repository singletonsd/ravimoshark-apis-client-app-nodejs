"use strict";

import { getConnection } from "typeorm";
import { Clients } from "../databases/entities";
import { DatabaseUtilities } from "../databases/utils/DatabaseUtils";
import { Metadata } from "../models";
import { LoggerUtility } from "../utils/LoggerUtility";
import { ParametersComplete, ParametersIdDeleted, Utilities } from "../utils/utilities";
import { VALID_RESPONSES } from "../utils/ValidResponses";

const SERVICE_NAME = "ClientsService";
export class ClientsService {

  /**
   *  Check if a location exits.
   * @param refClient
   */
  public static exists(refClient: string): Promise<boolean> {
    const FUNCTION_NAME = "exists";
    const logHeader = `${SERVICE_NAME}: ${FUNCTION_NAME} -`;
    return new Promise<boolean>(async (resolve, reject) => {
      const previous = await getConnection().manager.findOne(Clients, {
        select: [ "refClient" ],
        where: { refClient }
      });
      if (!previous) {
        LoggerUtility.warn(`${logHeader} ${VALID_RESPONSES.ERROR.NOT_EXIST.CLIENT} ${refClient}`);
        resolve(false);
        return;
      }
      resolve(true);
      return;
    });
  }

  /**
   * Add one client.
   * Add one client.
   *
   * body Clients
   * returns Clients
   */
  public static add(body) {
  return new Promise((resolve, reject) => {
    const examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

  /**
   * Delete one client.
   * Delete one client.
   *
   * id Long id to delete or search
   * returns IdInteger
   */
  public static delete(id) {
  return new Promise((resolve, reject) => {
    const examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

  /**
   * Edit one client.
   * Edit one client.
   *
   * body Clients
   * returns Clients
   */
  public static edit(body) {
  return new Promise((resolve, reject) => {
    const examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

  /**
   * Get one client.
   * Get one client.
   *
   * id Long id to delete or search
   * deleted Deleted Get all, deleted, not deleted data. Default not deleted. (optional)
   * returns Clients
   */
  public static getById(params: ParametersIdDeleted): Promise<Clients>  {
    const FUNCTION_NAME = "getById";
    const logHeader = `${SERVICE_NAME}: ${FUNCTION_NAME} -`;
    return new Promise<Clients>(async (resolve, reject) => {
    LoggerUtility.info(`${logHeader}`);
    LoggerUtility.debug(`${logHeader} with`, params);
    const previous: Clients = await getConnection().manager.findOne(Clients,
        DatabaseUtilities.getFindOneObject(params.id, params.deleted, Clients));
    if (!previous) {
        LoggerUtility.warn(`${logHeader} not exists with id=${params.id} and deleted=${params.deleted.toString()}`);
        reject(VALID_RESPONSES.ERROR.NOT_EXIST.CLIENT);
        return;
    }
    LoggerUtility.info(`${logHeader} got ${previous.refClient}`);
    resolve(previous);
    return;
    });
}

  /**
   * Get all clients.
   * Get all clients.
   *
   * skip Integer number of item to skip (optional)
   * limit Integer max records to return (optional)
   * orderBy String order by property. (optional)
   * filterBy String filter data. (optional)
   * deleted Deleted Get all, deleted, not deleted data. Default not deleted. (optional)
   * metadata Boolean If metadata is needed (for pagination controls) (optional)
   * refClient String Data from a desired contract (optional)
   * returns inline_response_200_1
   */
  public static get(params: ParametersComplete): Promise<{metadata: Metadata, items: Array<Clients>}>  {
    const FUNCTION_NAME = "get";
    const logHeader = `${SERVICE_NAME}: ${FUNCTION_NAME} -`;
    return new Promise(async (resolve, reject) => {
      LoggerUtility.info(`${logHeader}`);
      const object = DatabaseUtilities.getFindObject(params, Clients);
      if (!object) {
          LoggerUtility.warn(`${logHeader} order param malformed`, params.orderBy);
          reject(VALID_RESPONSES.ERROR.PARAMS.MALFORMED.ORDERBY);
          return;
      }
      LoggerUtility.debug(`${logHeader} with`, object);
      const [items, total] = await getConnection().manager.findAndCount(Clients, object);
      if (!items || !items.length) {
          LoggerUtility.warn(`${logHeader} empty result`);
          resolve();
          return;
      }
      LoggerUtility.info(`${logHeader} got ${items.length}`);
      resolve(Utilities.getMetadataFormat(items, total, params));
      return;
    });
  }
}
