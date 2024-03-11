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
import type { CustomFilter } from './CustomFilter';
import {
    CustomFilterFromJSON,
    CustomFilterFromJSONTyped,
    CustomFilterToJSON,
} from './CustomFilter';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * Adds nested create feature
 * @export
 * @interface PatchedRecipeBook
 */
export interface PatchedRecipeBook {
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipeBook
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedRecipeBook
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedRecipeBook
     */
    description?: string;
    /**
     * 
     * @type {Array<User>}
     * @memberof PatchedRecipeBook
     */
    shared?: Array<User>;
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipeBook
     */
    readonly createdBy?: number;
    /**
     * 
     * @type {CustomFilter}
     * @memberof PatchedRecipeBook
     */
    filter?: CustomFilter;
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipeBook
     */
    order?: number;
}

/**
 * Check if a given object implements the PatchedRecipeBook interface.
 */
export function instanceOfPatchedRecipeBook(value: object): boolean {
    return true;
}

export function PatchedRecipeBookFromJSON(json: any): PatchedRecipeBook {
    return PatchedRecipeBookFromJSONTyped(json, false);
}

export function PatchedRecipeBookFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedRecipeBook {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'shared': json['shared'] == null ? undefined : ((json['shared'] as Array<any>).map(UserFromJSON)),
        'createdBy': json['created_by'] == null ? undefined : json['created_by'],
        'filter': json['filter'] == null ? undefined : CustomFilterFromJSON(json['filter']),
        'order': json['order'] == null ? undefined : json['order'],
    };
}

export function PatchedRecipeBookToJSON(value?: PatchedRecipeBook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'description': value['description'],
        'shared': value['shared'] == null ? undefined : ((value['shared'] as Array<any>).map(UserToJSON)),
        'filter': CustomFilterToJSON(value['filter']),
        'order': value['order'],
    };
}

