/**
 * Mango API
 * This is the Mango API Server RESTful service for OpenAPI 3.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: haighis@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Application object
 */
export interface Application { 
    /**
     * Name of the Application.
     */
    applicationName: string;
    /**
     * Url of the Application.
     */
    applicationUrl: string;
    /**
     * Installed Instance Code of the Application.
     */
    installedInstanceCode: string;
    /**
     * Namespace of the item
     */
    namespace: string;
}

