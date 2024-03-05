/* tslint:disable */
/* eslint-disable */
/**
 * Tandoor
 * Tandoor API Docs
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    MethodEnum,
    MethodEnumFromJSON,
    MethodEnumFromJSONTyped,
    MethodEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface Storage
 */
export interface Storage {
    /**
     * 
     * @type {number}
     * @memberof Storage
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof Storage
     */
    name: string;
    /**
     * 
     * @type {MethodEnum}
     * @memberof Storage
     */
    method?: MethodEnum;
    /**
     * 
     * @type {string}
     * @memberof Storage
     */
    username?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Storage
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Storage
     */
    token?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Storage
     */
    readonly createdBy: number;
}

export function StorageFromJSON(json: any): Storage {
    return StorageFromJSONTyped(json, false);
}

export function StorageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Storage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'method': !exists(json, 'method') ? undefined : MethodEnumFromJSON(json['method']),
        'username': !exists(json, 'username') ? undefined : json['username'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'createdBy': json['created_by'],
    };
}

export function StorageToJSON(value?: Storage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'method': MethodEnumToJSON(value.method),
        'username': value.username,
        'password': value.password,
        'token': value.token,
    };
}


