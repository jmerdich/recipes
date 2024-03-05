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
 * Adds nested create feature
 * @export
 * @interface PropertyType
 */
export interface PropertyType {
    /**
     * 
     * @type {number}
     * @memberof PropertyType
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof PropertyType
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PropertyType
     */
    unit?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PropertyType
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PropertyType
     */
    order?: number;
    /**
     * 
     * @type {string}
     * @memberof PropertyType
     */
    openDataSlug?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PropertyType
     */
    fdcId?: number | null;
}

export function PropertyTypeFromJSON(json: any): PropertyType {
    return PropertyTypeFromJSONTyped(json, false);
}

export function PropertyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertyType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'unit': !exists(json, 'unit') ? undefined : json['unit'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'openDataSlug': !exists(json, 'open_data_slug') ? undefined : json['open_data_slug'],
        'fdcId': !exists(json, 'fdc_id') ? undefined : json['fdc_id'],
    };
}

export function PropertyTypeToJSON(value?: PropertyType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'unit': value.unit,
        'description': value.description,
        'order': value.order,
        'open_data_slug': value.openDataSlug,
        'fdc_id': value.fdcId,
    };
}


