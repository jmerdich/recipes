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


import * as runtime from '../runtime';
import type {
  AuthToken,
} from '../models/index';
import {
    AuthTokenFromJSON,
    AuthTokenToJSON,
} from '../models/index';

export interface ApiTokenAuthCreateRequest {
    username: string;
    password: string;
    token: string;
}

/**
 * 
 */
export class ApiTokenAuthApi extends runtime.BaseAPI {

    /**
     */
    async apiTokenAuthCreateRaw(requestParameters: ApiTokenAuthCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthToken>> {
        if (requestParameters['username'] == null) {
            throw new runtime.RequiredError(
                'username',
                'Required parameter "username" was null or undefined when calling apiTokenAuthCreate().'
            );
        }

        if (requestParameters['password'] == null) {
            throw new runtime.RequiredError(
                'password',
                'Required parameter "password" was null or undefined when calling apiTokenAuthCreate().'
            );
        }

        if (requestParameters['token'] == null) {
            throw new runtime.RequiredError(
                'token',
                'Required parameter "token" was null or undefined when calling apiTokenAuthCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
            { contentType: 'multipart/form-data' },
            { contentType: 'application/json' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['username'] != null) {
            formParams.append('username', requestParameters['username'] as any);
        }

        if (requestParameters['password'] != null) {
            formParams.append('password', requestParameters['password'] as any);
        }

        if (requestParameters['token'] != null) {
            formParams.append('token', requestParameters['token'] as any);
        }

        const response = await this.request({
            path: `/api-token-auth/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthTokenFromJSON(jsonValue));
    }

    /**
     */
    async apiTokenAuthCreate(requestParameters: ApiTokenAuthCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthToken> {
        const response = await this.apiTokenAuthCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
