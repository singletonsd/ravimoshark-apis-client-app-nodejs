"use strict";

import { ParametersComplete, ParametersIdDeleted } from "src/utils/utilities";

const SERVICE_NAME = "AddressesService";
export class AddressesService {

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
  public static getById(params: ParametersIdDeleted) {
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
  public static get(params: ParametersComplete) {
    return new Promise((resolve, reject) => {
      const examples = {};
      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
      }
    });
  }
}
