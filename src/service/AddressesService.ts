"use strict";

import { getConnection } from "typeorm";
import { Addresses } from "../databases/entities";
import { DatabaseUtilities } from "../databases/utils/DatabaseUtils";
import { Metadata } from "../models";
import { LoggerUtility } from "../utils/LoggerUtility";
import { ParametersComplete, ParametersIdDeleted, Utilities } from "../utils/utilities";
import { VALID_RESPONSES } from "../utils/ValidResponses";

const SERVICE_NAME = "AddressesService";
export class AddressesService {

    /**
     *  Check if a machine exits.
     * @param id
     */
    public static exists(id: number): Promise<boolean> {
      const FUNCTION_NAME = "exists";
      const logHeader = `${SERVICE_NAME}: ${FUNCTION_NAME} -`;
      return new Promise<boolean>(async (resolve) => {
          const previous = await getConnection().manager.findOne(Addresses, {
              select: [ "id" ],
              where: { id }
          });
          if (!previous) {
              LoggerUtility.warn(`${logHeader} ${VALID_RESPONSES.ERROR.NOT_EXIST.ADDRESS} ${id}`);
              resolve(false);
              return;
          }
          resolve(true);
          return;
      });
  }

  /**
   * Add one address.
   * Add one address.
   *
   * body Addresses
   * returns Addresses
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
   * Delete one address.
   * Delete one address.
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
   * Edit one address.
   * Edit one address.
   *
   * body Addresses
   * returns Addresses
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
   * Get one address.
   * Get one address.
   *
   * id Long id to delete or search
   * deleted Deleted Get all, deleted, not deleted data. Default not deleted. (optional)
   * returns Addresses
   */
  public static getById(params: ParametersIdDeleted): Promise<Addresses>  {
    const FUNCTION_NAME = "getById";
    const logHeader = `${SERVICE_NAME}: ${FUNCTION_NAME} -`;
    return new Promise<Addresses>(async (resolve, reject) => {
    LoggerUtility.info(`${logHeader}`);
    LoggerUtility.debug(`${logHeader} with`, params);
    const previous: Addresses = await getConnection().manager.findOne(Addresses,
      DatabaseUtilities.getFindOneObject(params.id, params.deleted, Addresses));
    if (!previous) {
      LoggerUtility.warn(`${logHeader} not exists with id=${params.id} and deleted=${params.deleted.toString()}`);
      reject(VALID_RESPONSES.ERROR.NOT_EXIST.ADDRESS);
      return;
    }
    LoggerUtility.info(`${logHeader} got ${previous.id}`);
    resolve(previous);
    return;
    });
}

  /**
   * Get all addresses.
   * Get all addresses.
   *
   * skip Integer number of item to skip (optional)
   * limit Integer max records to return (optional)
   * orderBy String order by property. (optional)
   * filterBy String filter data. (optional)
   * deleted Deleted Get all, deleted, not deleted data. Default not deleted. (optional)
   * metadata Boolean If metadata is needed (for pagination controls) (optional)
   * refClient String Data from a desired contract (optional)
   * returns inline_response_200
   */
  public static get(params: ParametersComplete): Promise<{metadata: Metadata, items: Array<Addresses>}>  {
    const FUNCTION_NAME = "get";
    const logHeader = `${SERVICE_NAME}: ${FUNCTION_NAME} -`;
    return new Promise(async (resolve, reject) => {
      LoggerUtility.info(`${logHeader}`);
      const object = DatabaseUtilities.getFindObject(params, Addresses);
      if (!object) {
          LoggerUtility.warn(`${logHeader} order param malformed`, params.orderBy);
          reject(VALID_RESPONSES.ERROR.PARAMS.MALFORMED.ORDERBY);
          return;
      }
      LoggerUtility.info(`${logHeader} with`, object);
      const [items, total] = await getConnection().manager.findAndCount(Addresses, object);
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
