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
    url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedConnectorConfigConfig
     */
    token?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedConnectorConfigConfig
     */
    todoEntity?: string | null;
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

export function PatchedConnectorConfigConfigFromJSON(json: any): PatchedConnectorConfigConfig {
    return PatchedConnectorConfigConfigFromJSONTyped(json, false);
}

export function PatchedConnectorConfigConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedConnectorConfigConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'todoEntity': !exists(json, 'todo_entity') ? undefined : json['todo_entity'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'onShoppingListEntryCreatedEnabled': !exists(json, 'on_shopping_list_entry_created_enabled') ? undefined : json['on_shopping_list_entry_created_enabled'],
        'onShoppingListEntryUpdatedEnabled': !exists(json, 'on_shopping_list_entry_updated_enabled') ? undefined : json['on_shopping_list_entry_updated_enabled'],
        'onShoppingListEntryDeletedEnabled': !exists(json, 'on_shopping_list_entry_deleted_enabled') ? undefined : json['on_shopping_list_entry_deleted_enabled'],
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
    };
}

export function PatchedConnectorConfigConfigToJSON(value?: PatchedConnectorConfigConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'url': value.url,
        'token': value.token,
        'todo_entity': value.todoEntity,
        'enabled': value.enabled,
        'on_shopping_list_entry_created_enabled': value.onShoppingListEntryCreatedEnabled,
        'on_shopping_list_entry_updated_enabled': value.onShoppingListEntryUpdatedEnabled,
        'on_shopping_list_entry_deleted_enabled': value.onShoppingListEntryDeletedEnabled,
    };
}


