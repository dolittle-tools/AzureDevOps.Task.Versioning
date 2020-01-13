/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { a_tags_creator } from './given/a_tags_creator';
import { expect } from 'chai';

describe('when version is undefined', () => {
    const tags_creator = new a_tags_creator().tags_creator;
    let exception: Error;
    try {
        tags_creator.create(undefined as any);
    } catch (error) {
        exception = error;
    }
    it('should throw an exception', () => expect(exception).to.not.be.undefined);
});
