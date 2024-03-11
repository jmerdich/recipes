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
import type { OpenDataCategory } from './OpenDataCategory';
import {
    OpenDataCategoryFromJSON,
    OpenDataCategoryFromJSONTyped,
    OpenDataCategoryToJSON,
} from './OpenDataCategory';
import type { OpenDataFoodProperty } from './OpenDataFoodProperty';
import {
    OpenDataFoodPropertyFromJSON,
    OpenDataFoodPropertyFromJSONTyped,
    OpenDataFoodPropertyToJSON,
} from './OpenDataFoodProperty';
import type { OpenDataUnit } from './OpenDataUnit';
import {
    OpenDataUnitFromJSON,
    OpenDataUnitFromJSONTyped,
    OpenDataUnitToJSON,
} from './OpenDataUnit';
import type { OpenDataVersion } from './OpenDataVersion';
import {
    OpenDataVersionFromJSON,
    OpenDataVersionFromJSONTyped,
    OpenDataVersionToJSON,
} from './OpenDataVersion';

/**
 * Moves `UniqueValidator`'s from the validation stage to the save stage.
 * It solves the problem with nested validation for unique fields on update.
 * 
 * If you want more details, you can read related issues and articles:
 * https://github.com/beda-software/drf-writable-nested/issues/1
 * http://www.django-rest-framework.org/api-guide/validators/#updating-nested-serializers
 * 
 * Example of usage:
 * ```
 *     class Child(models.Model):
 *     field = models.CharField(unique=True)
 * 
 * 
 * class Parent(models.Model):
 *     child = models.ForeignKey('Child')
 * 
 * 
 * class ChildSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
 *     class Meta:
 *         model = Child
 * 
 * 
 * class ParentSerializer(NestedUpdateMixin, serializers.ModelSerializer):
 *     child = ChildSerializer()
 * 
 *     class Meta:
 *         model = Parent
 * ```
 * 
 * Note: `UniqueFieldsMixin` must be applied only on the serializer
 * which has unique fields.
 * 
 * Note: When you are using both mixins
 * (`UniqueFieldsMixin` and `NestedCreateMixin` or `NestedUpdateMixin`)
 * you should put `UniqueFieldsMixin` ahead.
 * @export
 * @interface PatchedOpenDataFood
 */
export interface PatchedOpenDataFood {
    /**
     * 
     * @type {number}
     * @memberof PatchedOpenDataFood
     */
    readonly id?: number;
    /**
     * 
     * @type {OpenDataVersion}
     * @memberof PatchedOpenDataFood
     */
    version?: OpenDataVersion;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataFood
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataFood
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataFood
     */
    pluralName?: string;
    /**
     * 
     * @type {OpenDataCategory}
     * @memberof PatchedOpenDataFood
     */
    storeCategory?: OpenDataCategory;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof PatchedOpenDataFood
     */
    preferredUnitMetric?: OpenDataUnit;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof PatchedOpenDataFood
     */
    preferredShoppingUnitMetric?: OpenDataUnit;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof PatchedOpenDataFood
     */
    preferredUnitImperial?: OpenDataUnit;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof PatchedOpenDataFood
     */
    preferredShoppingUnitImperial?: OpenDataUnit;
    /**
     * 
     * @type {Array<OpenDataFoodProperty>}
     * @memberof PatchedOpenDataFood
     */
    properties?: Array<OpenDataFoodProperty>;
    /**
     * 
     * @type {number}
     * @memberof PatchedOpenDataFood
     */
    propertiesFoodAmount?: number;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof PatchedOpenDataFood
     */
    propertiesFoodUnit?: OpenDataUnit;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataFood
     */
    propertiesSource?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataFood
     */
    fdcId?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataFood
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataFood
     */
    readonly createdBy?: string;
}

/**
 * Check if a given object implements the PatchedOpenDataFood interface.
 */
export function instanceOfPatchedOpenDataFood(value: object): boolean {
    return true;
}

export function PatchedOpenDataFoodFromJSON(json: any): PatchedOpenDataFood {
    return PatchedOpenDataFoodFromJSONTyped(json, false);
}

export function PatchedOpenDataFoodFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedOpenDataFood {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'version': json['version'] == null ? undefined : OpenDataVersionFromJSON(json['version']),
        'slug': json['slug'] == null ? undefined : json['slug'],
        'name': json['name'] == null ? undefined : json['name'],
        'pluralName': json['plural_name'] == null ? undefined : json['plural_name'],
        'storeCategory': json['store_category'] == null ? undefined : OpenDataCategoryFromJSON(json['store_category']),
        'preferredUnitMetric': json['preferred_unit_metric'] == null ? undefined : OpenDataUnitFromJSON(json['preferred_unit_metric']),
        'preferredShoppingUnitMetric': json['preferred_shopping_unit_metric'] == null ? undefined : OpenDataUnitFromJSON(json['preferred_shopping_unit_metric']),
        'preferredUnitImperial': json['preferred_unit_imperial'] == null ? undefined : OpenDataUnitFromJSON(json['preferred_unit_imperial']),
        'preferredShoppingUnitImperial': json['preferred_shopping_unit_imperial'] == null ? undefined : OpenDataUnitFromJSON(json['preferred_shopping_unit_imperial']),
        'properties': json['properties'] == null ? undefined : ((json['properties'] as Array<any>).map(OpenDataFoodPropertyFromJSON)),
        'propertiesFoodAmount': json['properties_food_amount'] == null ? undefined : json['properties_food_amount'],
        'propertiesFoodUnit': json['properties_food_unit'] == null ? undefined : OpenDataUnitFromJSON(json['properties_food_unit']),
        'propertiesSource': json['properties_source'] == null ? undefined : json['properties_source'],
        'fdcId': json['fdc_id'] == null ? undefined : json['fdc_id'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'createdBy': json['created_by'] == null ? undefined : json['created_by'],
    };
}

export function PatchedOpenDataFoodToJSON(value?: PatchedOpenDataFood | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'version': OpenDataVersionToJSON(value['version']),
        'slug': value['slug'],
        'name': value['name'],
        'plural_name': value['pluralName'],
        'store_category': OpenDataCategoryToJSON(value['storeCategory']),
        'preferred_unit_metric': OpenDataUnitToJSON(value['preferredUnitMetric']),
        'preferred_shopping_unit_metric': OpenDataUnitToJSON(value['preferredShoppingUnitMetric']),
        'preferred_unit_imperial': OpenDataUnitToJSON(value['preferredUnitImperial']),
        'preferred_shopping_unit_imperial': OpenDataUnitToJSON(value['preferredShoppingUnitImperial']),
        'properties': value['properties'] == null ? undefined : ((value['properties'] as Array<any>).map(OpenDataFoodPropertyToJSON)),
        'properties_food_amount': value['propertiesFoodAmount'],
        'properties_food_unit': OpenDataUnitToJSON(value['propertiesFoodUnit']),
        'properties_source': value['propertiesSource'],
        'fdc_id': value['fdcId'],
        'comment': value['comment'],
    };
}

