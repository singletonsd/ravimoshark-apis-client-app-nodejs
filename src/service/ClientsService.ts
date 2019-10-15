"use strict";

import { ParametersComplete, ParametersIdDeleted } from "src/utils/utilities";

const SERVICE_NAME = "ClientsService";
export class ClientsService {

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
