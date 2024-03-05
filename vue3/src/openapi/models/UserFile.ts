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
 * @interface UserFile
 */
export interface UserFile {
    /**
     * 
     * @type {number}
     * @memberof UserFile
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof UserFile
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UserFile
     */
    file: string;
    /**
     * 
     * @type {string}
     * @memberof UserFile
     */
    readonly fileDownload: string;
    /**
     * 
     * @type {string}
     * @memberof UserFile
     */
    readonly preview: string;
    /**
     * 
     * @type {number}
     * @memberof UserFile
     */
    readonly fileSizeKb: number;
}

export function UserFileFromJSON(json: any): UserFile {
    return UserFileFromJSONTyped(json, false);
}

export function UserFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserFile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'file': json['file'],
        'fileDownload': json['file_download'],
        'preview': json['preview'],
        'fileSizeKb': json['file_size_kb'],
    };
}

export function UserFileToJSON(value?: UserFile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'file': value.file,
    };
}


