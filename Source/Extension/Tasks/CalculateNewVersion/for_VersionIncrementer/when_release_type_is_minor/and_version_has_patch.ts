/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { a_version_incrementor } from '../given/a_version_incrementer';

describe('and version has patch', () => {
    const version_incrementor = new a_version_incrementor().version_incrementor;
    const version = '0.0.1';
    const result = version_incrementor.increment(version, 'minor');

    it('should return the correct version', () => result.should.equal('0.1.0'));
});
