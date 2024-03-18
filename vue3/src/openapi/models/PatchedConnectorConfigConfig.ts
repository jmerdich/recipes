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
 * @interface PatchedConnectorConfigConfig
 */
export interface PatchedConnectorConfigConfig {
    /**
     * 
     * @type {number}
     * @memberof PatchedConnectorConfigConfig
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedConnectorConfigConfig
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedConnectorConfigConfig
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedConnectorConfigConfig
     */
    token?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedConnectorConfigConfig
     */
    todoEntity?: string;
    /**
     * Is Connector Enabled
     * @type {boolean}
     * @memberof PatchedConnectorConfigConfig
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedConnectorConfigConfig
     */
    onShoppingListEntryCreatedEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedConnectorConfigConfig
     */
    onShoppingListEntryUpdatedEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedConnectorConfigConfig
     */
    onShoppingListEntryDeletedEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PatchedConnectorConfigConfig
     */
    readonly createdBy?: number;
}

/**
 * Check if a given object implements the PatchedConnectorConfigConfig interface.
 */
export function instanceOfPatchedConnectorConfigConfig(value: object): boolean {
    return true;
}

export function PatchedConnectorConfigConfigFromJSON(json: any): PatchedConnectorConfigConfig {
    return PatchedConnectorConfigConfigFromJSONTyped(json, false);
}

export function PatchedConnectorConfigConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedConnectorConfigConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'url': json['url'] == null ? undefined : json['url'],
        'token': json['token'] == null ? undefined : json['token'],
        'todoEntity': json['todo_entity'] == null ? undefined : json['todo_entity'],
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'onShoppingListEntryCreatedEnabled': json['on_shopping_list_entry_created_enabled'] == null ? undefined : json['on_shopping_list_entry_created_enabled'],
        'onShoppingListEntryUpdatedEnabled': json['on_shopping_list_entry_updated_enabled'] == null ? undefined : json['on_shopping_list_entry_updated_enabled'],
        'onShoppingListEntryDeletedEnabled': json['on_shopping_list_entry_deleted_enabled'] == null ? undefined : json['on_shopping_list_entry_deleted_enabled'],
        'createdBy': json['created_by'] == null ? undefined : json['created_by'],
    };
}

export function PatchedConnectorConfigConfigToJSON(value?: PatchedConnectorConfigConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'url': value['url'],
        'token': value['token'],
        'todo_entity': value['todoEntity'],
        'enabled': value['enabled'],
        'on_shopping_list_entry_created_enabled': value['onShoppingListEntryCreatedEnabled'],
        'on_shopping_list_entry_updated_enabled': value['onShoppingListEntryUpdatedEnabled'],
        'on_shopping_list_entry_deleted_enabled': value['onShoppingListEntryDeletedEnabled'],
    };
}

