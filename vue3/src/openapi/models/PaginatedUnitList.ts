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
import type { Unit } from './Unit';
import {
    UnitFromJSON,
    UnitFromJSONTyped,
    UnitToJSON,
} from './Unit';

/**
 * 
 * @export
 * @interface PaginatedUnitList
 */
export interface PaginatedUnitList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedUnitList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedUnitList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedUnitList
     */
    previous?: string;
    /**
     * 
     * @type {Array<Unit>}
     * @memberof PaginatedUnitList
     */
    results?: Array<Unit>;
}

/**
 * Check if a given object implements the PaginatedUnitList interface.
 */
export function instanceOfPaginatedUnitList(value: object): boolean {
    return true;
}

export function PaginatedUnitListFromJSON(json: any): PaginatedUnitList {
    return PaginatedUnitListFromJSONTyped(json, false);
}

export function PaginatedUnitListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedUnitList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(UnitFromJSON)),
    };
}

export function PaginatedUnitListToJSON(value?: PaginatedUnitList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(UnitToJSON)),
    };
}

