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
 * @interface KeywordLabel
 */
export interface KeywordLabel {
    /**
     * 
     * @type {number}
     * @memberof KeywordLabel
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof KeywordLabel
     */
    readonly label: string;
}

export function KeywordLabelFromJSON(json: any): KeywordLabel {
    return KeywordLabelFromJSONTyped(json, false);
}

export function KeywordLabelFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeywordLabel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'label': json['label'],
    };
}

export function KeywordLabelToJSON(value?: KeywordLabel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}


