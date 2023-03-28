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
import { Artifact } from './artifact';


/**
 * Item object
 */
export interface Item { 
    id?: string;
    name?: string;
    description?: string;
    status?: string;
    namespace?: string;
    artifacts?: Set<Artifact>;
}

