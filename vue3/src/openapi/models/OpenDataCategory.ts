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
 * @interface OpenDataCategory
 */
export interface OpenDataCategory {
    /**
     * 
     * @type {number}
     * @memberof OpenDataCategory
     */
    readonly id: number;
    /**
     * 
     * @type {OpenDataVersion}
     * @memberof OpenDataCategory
     */
    version: OpenDataVersion;
    /**
     * 
     * @type {string}
     * @memberof OpenDataCategory
     */
    slug: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataCategory
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataCategory
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataCategory
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataCategory
     */
    readonly createdBy: string;
}

/**
 * Check if a given object implements the OpenDataCategory interface.
 */
export function instanceOfOpenDataCategory(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('version' in value)) return false;
    if (!('slug' in value)) return false;
    if (!('name' in value)) return false;
    if (!('createdBy' in value)) return false;
    return true;
}

export function OpenDataCategoryFromJSON(json: any): OpenDataCategory {
    return OpenDataCategoryFromJSONTyped(json, false);
}

export function OpenDataCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpenDataCategory {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'version': OpenDataVersionFromJSON(json['version']),
        'slug': json['slug'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'createdBy': json['created_by'],
    };
}

export function OpenDataCategoryToJSON(value?: OpenDataCategory | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'version': OpenDataVersionToJSON(value['version']),
        'slug': value['slug'],
        'name': value['name'],
        'description': value['description'],
        'comment': value['comment'],
    };
}

