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
    OpenDataVersion,
    OpenDataVersionFromJSON,
    OpenDataVersionFromJSONTyped,
    OpenDataVersionToJSON,
} from './';

/**
 * Moves `UniqueValidator`'s from the validation stage to the save stage.
It solves the problem with nested validation for unique fields on update.

If you want more details, you can read related issues and articles:
https://github.com/beda-software/drf-writable-nested/issues/1
http://www.django-rest-framework.org/api-guide/validators/#updating-nested-serializers

Example of usage:
```
    class Child(models.Model):
    field = models.CharField(unique=True)


class Parent(models.Model):
    child = models.ForeignKey('Child')


class ChildSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = Child


class ParentSerializer(NestedUpdateMixin, serializers.ModelSerializer):
    child = ChildSerializer()

    class Meta:
        model = Parent
```

Note: `UniqueFieldsMixin` must be applied only on the serializer
which has unique fields.

Note: When you are using both mixins
(`UniqueFieldsMixin` and `NestedCreateMixin` or `NestedUpdateMixin`)
you should put `UniqueFieldsMixin` ahead.
 * @export
 * @interface PatchedOpenDataProperty
 */
export interface PatchedOpenDataProperty {
    /**
     * 
     * @type {number}
     * @memberof PatchedOpenDataProperty
     */
    readonly id?: number;
    /**
     * 
     * @type {OpenDataVersion}
     * @memberof PatchedOpenDataProperty
     */
    version?: OpenDataVersion;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataProperty
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataProperty
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataProperty
     */
    unit?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedOpenDataProperty
     */
    fdcId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataProperty
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataProperty
     */
    readonly createdBy?: string;
}

export function PatchedOpenDataPropertyFromJSON(json: any): PatchedOpenDataProperty {
    return PatchedOpenDataPropertyFromJSONTyped(json, false);
}

export function PatchedOpenDataPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedOpenDataProperty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'version': !exists(json, 'version') ? undefined : OpenDataVersionFromJSON(json['version']),
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'unit': !exists(json, 'unit') ? undefined : json['unit'],
        'fdcId': !exists(json, 'fdc_id') ? undefined : json['fdc_id'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
    };
}

export function PatchedOpenDataPropertyToJSON(value?: PatchedOpenDataProperty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': OpenDataVersionToJSON(value.version),
        'slug': value.slug,
        'name': value.name,
        'unit': value.unit,
        'fdc_id': value.fdcId,
        'comment': value.comment,
    };
}


