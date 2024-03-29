/* tslint:disable */
/* eslint-disable */
/**
 * EAB Service
 * Go microservice for EAB management.
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface EchoHTTPError
 */
export interface EchoHTTPError {
    /**
     * 
     * @type {any}
     * @memberof EchoHTTPError
     */
    'message'?: any;
}
/**
 * 
 * @export
 * @interface ModelsEAB
 */
export interface ModelsEAB {
    /**
     * 
     * @type {string}
     * @memberof ModelsEAB
     */
    'bound_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsEAB
     */
    'comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsEAB
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsEAB
     */
    'key_bytes'?: string;
}
/**
 * 
 * @export
 * @interface ModelsEabRequest
 */
export interface ModelsEabRequest {
    /**
     * 
     * @type {string}
     * @memberof ModelsEabRequest
     */
    'comment'?: string;
}

/**
 * EABApi - axios parameter creator
 * @export
 */
export const EABApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets all existing external account keys.
         * @summary Gets existing external account keys.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eabGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/eab/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete an existing EAB Key.
         * @summary Deletes an EAB Key.
         * @param {string} id EAB ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eabIdDelete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('eabIdDelete', 'id', id)
            const localVarPath = `/eab/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new key.
         * @summary Create a new key.
         * @param {ModelsEabRequest} modelsEabRequest The optional comment of the token to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eabPost: async (modelsEabRequest: ModelsEabRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'modelsEabRequest' is not null or undefined
            assertParamExists('eabPost', 'modelsEabRequest', modelsEabRequest)
            const localVarPath = `/eab/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(modelsEabRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EABApi - functional programming interface
 * @export
 */
export const EABApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EABApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets all existing external account keys.
         * @summary Gets existing external account keys.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eabGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsEAB>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eabGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete an existing EAB Key.
         * @summary Deletes an EAB Key.
         * @param {string} id EAB ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eabIdDelete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eabIdDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a new key.
         * @summary Create a new key.
         * @param {ModelsEabRequest} modelsEabRequest The optional comment of the token to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eabPost(modelsEabRequest: ModelsEabRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelsEAB>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eabPost(modelsEabRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EABApi - factory interface
 * @export
 */
export const EABApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EABApiFp(configuration)
    return {
        /**
         * Gets all existing external account keys.
         * @summary Gets existing external account keys.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eabGet(options?: any): AxiosPromise<Array<ModelsEAB>> {
            return localVarFp.eabGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an existing EAB Key.
         * @summary Deletes an EAB Key.
         * @param {string} id EAB ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eabIdDelete(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.eabIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new key.
         * @summary Create a new key.
         * @param {ModelsEabRequest} modelsEabRequest The optional comment of the token to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eabPost(modelsEabRequest: ModelsEabRequest, options?: any): AxiosPromise<ModelsEAB> {
            return localVarFp.eabPost(modelsEabRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EABApi - object-oriented interface
 * @export
 * @class EABApi
 * @extends {BaseAPI}
 */
export class EABApi extends BaseAPI {
    /**
     * Gets all existing external account keys.
     * @summary Gets existing external account keys.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EABApi
     */
    public eabGet(options?: AxiosRequestConfig) {
        return EABApiFp(this.configuration).eabGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete an existing EAB Key.
     * @summary Deletes an EAB Key.
     * @param {string} id EAB ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EABApi
     */
    public eabIdDelete(id: string, options?: AxiosRequestConfig) {
        return EABApiFp(this.configuration).eabIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new key.
     * @summary Create a new key.
     * @param {ModelsEabRequest} modelsEabRequest The optional comment of the token to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EABApi
     */
    public eabPost(modelsEabRequest: ModelsEabRequest, options?: AxiosRequestConfig) {
        return EABApiFp(this.configuration).eabPost(modelsEabRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the username of the logged in user
         * @summary whoami Endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        whoamiGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/whoami`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the username of the logged in user
         * @summary whoami Endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async whoamiGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.whoamiGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * Returns the username of the logged in user
         * @summary whoami Endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        whoamiGet(options?: any): AxiosPromise<string> {
            return localVarFp.whoamiGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * Returns the username of the logged in user
     * @summary whoami Endpoint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public whoamiGet(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).whoamiGet(options).then((request) => request(this.axios, this.basePath));
    }
}


