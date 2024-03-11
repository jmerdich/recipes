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
 * @interface Unit
 */
export interface Unit {
    /**
     * 
     * @type {number}
     * @memberof Unit
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof Unit
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Unit
     */
    pluralName?: string;
    /**
     * 
     * @type {string}
     * @memberof Unit
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Unit
     */
    baseUnit?: string;
    /**
     * 
     * @type {string}
     * @memberof Unit
     */
    openDataSlug?: string;
}

/**
 * Check if a given object implements the Unit interface.
 */
export function instanceOfUnit(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    return true;
}

export function UnitFromJSON(json: any): Unit {
    return UnitFromJSONTyped(json, false);
}

export function UnitFromJSONTyped(json: any, ignoreDiscriminator: boolean): Unit {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'pluralName': json['plural_name'] == null ? undefined : json['plural_name'],
        'description': json['description'] == null ? undefined : json['description'],
        'baseUnit': json['base_unit'] == null ? undefined : json['base_unit'],
        'openDataSlug': json['open_data_slug'] == null ? undefined : json['open_data_slug'],
    };
}

export function UnitToJSON(value?: Unit | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'plural_name': value['pluralName'],
        'description': value['description'],
        'base_unit': value['baseUnit'],
        'open_data_slug': value['openDataSlug'],
    };
}

