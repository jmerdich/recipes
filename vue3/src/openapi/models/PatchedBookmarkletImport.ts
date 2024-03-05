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
/**
 * 
 * @export
 * @interface PatchedBookmarkletImport
 */
export interface PatchedBookmarkletImport {
    /**
     * 
     * @type {number}
     * @memberof PatchedBookmarkletImport
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedBookmarkletImport
     */
    url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedBookmarkletImport
     */
    html?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedBookmarkletImport
     */
    readonly createdBy?: number;
    /**
     * 
     * @type {Date}
     * @memberof PatchedBookmarkletImport
     */
    readonly createdAt?: Date;
}

export function PatchedBookmarkletImportFromJSON(json: any): PatchedBookmarkletImport {
    return PatchedBookmarkletImportFromJSONTyped(json, false);
}

export function PatchedBookmarkletImportFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedBookmarkletImport {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'html': !exists(json, 'html') ? undefined : json['html'],
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
    };
}

export function PatchedBookmarkletImportToJSON(value?: PatchedBookmarkletImport | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'html': value.html,
    };
}


