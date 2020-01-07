let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { EventTemplateV1 } from '../../src/data/version1/EventTemplateV1';
import { SeverityV1 } from '../../src/data/version1/SeverityV1';
import { EventTemplatesMemoryPersistence } from '../../src/persistence/EventTemplatesMemoryPersistence';
import { EventTemplatesController } from '../../src/logic/EventTemplatesController';
import { EventTemplatesLambdaFunction } from '../../src/container/EventTemplatesLambdaFunction';

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

suite('EventTemplatesLambdaFunction', ()=> {
    let lambda: EventTemplatesLambdaFunction;

    suiteSetup((done) => {
        let config = ConfigParams.fromTuples(
            'logger.descriptor', 'pip-services:logger:console:default:1.0',
            'persistence.descriptor', 'iqs-services-eventtemplates:persistence:memory:default:1.0',
            'controller.descriptor', 'iqs-services-eventtemplates:controller:default:default:1.0'
        );

        lambda = new EventTemplatesLambdaFunction();
        lambda.configure(config);
        lambda.open(null, done);
    });
    
    suiteTeardown((done) => {
        lambda.close(null, done);
    });
    
    test('CRUD Operations', (done) => {
        var template1, template2;

        async.series([
        // Create one template
            (callback) => {
                lambda.act(
                    {
                        role: 'event_templates',
                        cmd: 'create_template',
                        template: TEMPLATE1
                    },
                    (err, template) => {
                        assert.isNull(err);

                        assert.isObject(template);
                        assert.equal(template.org_id, TEMPLATE1.org_id);
                        assert.equal(template.severity, TEMPLATE1.severity);
                        assert.equal(template.description, TEMPLATE1.description);

                        template1 = template;

                        callback();
                    }
                );
            },
        // Create another template
            (callback) => {
                lambda.act(
                    {
                        role: 'event_templates',
                        cmd: 'create_template',
                        template: TEMPLATE2
                    },
                    (err, template) => {
                        assert.isNull(err);

                        assert.isObject(template);
                        assert.equal(template.org_id, TEMPLATE2.org_id);
                        assert.equal(template.severity, TEMPLATE2.severity);
                        assert.equal(template.description, TEMPLATE2.description);

                        template2 = template;

                        callback();
                    }
                );
            },
        // Get all templates
            (callback) => {
                lambda.act(
                    {
                        role: 'event_templates',
                        cmd: 'get_templates' 
                    },
                    (err, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.lengthOf(page.data, 2);

                        callback();
                    }
                );
            },
        // Update the template
            (callback) => {
                template1.description = 'Updated template 1';

                lambda.act(
                    {
                        role: 'event_templates',
                        cmd: 'update_template',
                        template: template1
                    },
                    (err, template) => {
                        assert.isNull(err);

                        assert.isObject(template);
                        assert.equal(template.description, 'Updated template 1');
                        assert.equal(template.org_id, TEMPLATE1.org_id);

                        template1 = template;

                        callback();
                    }
                );
            },
        // Delete template
            (callback) => {
                lambda.act(
                    {
                        role: 'event_templates',
                        cmd: 'delete_template_by_id',
                        template_id: template1.id
                    },
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete template
            (callback) => {
                lambda.act(
                    {
                        role: 'event_templates',
                        cmd: 'get_template_by_id',
                        template_id: template1.id
                    },
                    (err, template) => {
                        assert.isNull(err);

                        assert.isNull(template || null);

                        callback();
                    }
                );
            }
        ], done);
    });
});