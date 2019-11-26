/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { ReleaseType} from "semver";

/**
 * Defines a system that can extract a release type from a list of labels
 *
 * @export
 * @interface IReleaseTypeExtractor
 */
export interface IReleaseTypeExtractor {

    /**
     * Extracts a release type from a comma separated list of labels
     *
     * @param {string | undefined} labels
     * @returns {ReleaseType}
     */
    extract(labels: undefined | string): ReleaseType | undefined
}
