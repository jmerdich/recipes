/* tslint:disable */
/* eslint-disable */
/**
 * Django Recipes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
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
 * @interface FoodRecipe
 */
export interface FoodRecipe {
    /**
     * 
     * @type {number}
     * @memberof FoodRecipe
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof FoodRecipe
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof FoodRecipe
     */
    readonly url?: string;
}

/**
 * Check if a given object implements the FoodRecipe interface.
 */
export function instanceOfFoodRecipe(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function FoodRecipeFromJSON(json: any): FoodRecipe {
    return FoodRecipeFromJSONTyped(json, false);
}

export function FoodRecipeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FoodRecipe {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function FoodRecipeToJSON(value?: FoodRecipe | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

