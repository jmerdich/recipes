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
    Food,
    FoodFromJSON,
    FoodFromJSONTyped,
    FoodToJSON,
} from './';

/**
 * 
 * @export
 * @interface PaginatedFoodList
 */
export interface PaginatedFoodList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedFoodList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedFoodList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedFoodList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Food>}
     * @memberof PaginatedFoodList
     */
    results?: Array<Food>;
}

export function PaginatedFoodListFromJSON(json: any): PaginatedFoodList {
    return PaginatedFoodListFromJSONTyped(json, false);
}

export function PaginatedFoodListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedFoodList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(FoodFromJSON)),
    };
}

export function PaginatedFoodListToJSON(value?: PaginatedFoodList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(FoodToJSON)),
    };
}


