let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';

import { EventTemplateV1 } from '../../src/data/version1/EventTemplateV1';
import { SeverityV1 } from '../../src/data/version1/SeverityV1';

import { IEventTemplatesPersistence } from '../../src/persistence/IEventTemplatesPersistence';

let TEMPLATE1: EventTemplateV1 = {
    id: '1',
    org_id: '1',
    severity: SeverityV1.Medium,
    description: 'Event template #1'
};
let TEMPLATE2: EventTemplateV1 = {
    id: '2',
    org_id: '1',
    severity: SeverityV1.High,
    description: 'Event template #2'
};
let TEMPLATE3: EventTemplateV1 = {
    id: '3',
    org_id: '2',
    severity: SeverityV1.Low,
    description: 'Event template #3'
};

export class EventTemplatesPersistenceFixture {
    private _persistence: IEventTemplatesPersistence;
    
    constructor(persistence) {
        assert.isNotNull(persistence);
        this._persistence = persistence;
    }

    private testCreateEventTemplates(done) {
        async.series([
        // Create one template
            (callback) => {
                this._persistence.create(
                    null,
                    TEMPLATE1,
                    (err, template) => {
                        assert.isNull(err);

                        assert.isObject(template);
                        assert.equal(template.org_id, TEMPLATE1.org_id);
                        assert.equal(template.severity, TEMPLATE1.severity);
                        assert.equal(template.description, TEMPLATE1.description);

                        callback();
                    }
                );
            },
        // Create another template
            (callback) => {
                this._persistence.create(
                    null,
                    TEMPLATE2,
                    (err, template) => {
                        assert.isNull(err);

                        assert.isObject(template);
                        assert.equal(template.org_id, TEMPLATE2.org_id);
                        assert.equal(template.severity, TEMPLATE2.severity);
                        assert.equal(template.description, TEMPLATE2.description);

                        callback();
                    }
                );
            },
        // Create yet another template
            (callback) => {
                this._persistence.create(
                    null,
                    TEMPLATE3,
                    (err, template) => {
                        assert.isNull(err);

                        assert.isObject(template);
                        assert.equal(template.org_id, TEMPLATE3.org_id);
                        assert.equal(template.severity, TEMPLATE3.severity);
                        assert.equal(template.description, TEMPLATE3.description);

                        callback();
                    }
                );
            }
        ], done);
    }
                
    public testCrudOperations(done) {
        let template1: EventTemplateV1;

        async.series([
        // Create items
            (callback) => {
                this.testCreateEventTemplates(callback);
            },
        // Get all templates
            (callback) => {
                this._persistence.getPageByFilter(
                    null,
                    new FilterParams(),
                    new PagingParams(),
                    (err, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.lengthOf(page.data, 3);

                        template1 = page.data[0];

                        callback();
                    }
                );
            },
        // Update the template
            (callback) => {
                template1.description = 'Updated template 1';

                this._persistence.update(
                    null,
                    template1,
                    (err, template) => {
                        assert.isNull(err);

                        assert.isObject(template);
                        assert.equal(template.description, 'Updated template 1');
                        assert.equal(template.id, template1.id);

                        callback();
                    }
                );
            },
        // Delete template
            (callback) => {
                this._persistence.deleteById(
                    null,
                    template1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete template
            (callback) => {
                this._persistence.getOneById(
                    null,
                    template1.id,
                    (err, template) => {
                        assert.isNull(err);

                        assert.isNull(template || null);

                        callback();
                    }
                );
            }
        ], done);
    }

    public testGetWithFilter(done) {
        async.series([
        // Create templates
            (callback) => {
                this.testCreateEventTemplates(callback);
            },
        // Get templates filtered by organization id
            (callback) => {
                this._persistence.getPageByFilter(
                    null,
                    FilterParams.fromValue({
                        org_id: '1'
                    }),
                    new PagingParams(),
                    (err, templates) => {
                        assert.isNull(err);

                        assert.isObject(templates);
                        assert.lengthOf(templates.data, 2);

                        callback();
                    }
                );
            }
        ], done);
    }
}
