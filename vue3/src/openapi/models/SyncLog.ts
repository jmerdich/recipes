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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SyncLog
 */
export interface SyncLog {
    /**
     * 
     * @type {number}
     * @memberof SyncLog
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof SyncLog
     */
    sync: number;
    /**
     * 
     * @type {string}
     * @memberof SyncLog
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof SyncLog
     */
    msg?: string;
    /**
     * 
     * @type {Date}
     * @memberof SyncLog
     */
    readonly createdAt: Date;
}

/**
 * Check if a given object implements the SyncLog interface.
 */
export function instanceOfSyncLog(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('sync' in value)) return false;
    if (!('status' in value)) return false;
    if (!('createdAt' in value)) return false;
    return true;
}

export function SyncLogFromJSON(json: any): SyncLog {
    return SyncLogFromJSONTyped(json, false);
}

export function SyncLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): SyncLog {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'sync': json['sync'],
        'status': json['status'],
        'msg': json['msg'] == null ? undefined : json['msg'],
        'createdAt': (new Date(json['created_at'])),
    };
}

export function SyncLogToJSON(value?: SyncLog | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'sync': value['sync'],
        'status': value['status'],
        'msg': value['msg'],
    };
}

