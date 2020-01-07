let _ = require('lodash');
let async = require('async');
let restify = require('restify');
let assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';

import { EventTemplateV1 } from '../../../src/data/version1/EventTemplateV1';
import { SeverityV1 } from '../../../src/data/version1/SeverityV1';
import { EventTemplatesMemoryPersistence } from '../../../src/persistence/EventTemplatesMemoryPersistence';
import { EventTemplatesController } from '../../../src/logic/EventTemplatesController';
import { EventTemplatesHttpServiceV1 } from '../../../src/services/version1/EventTemplatesHttpServiceV1';

let httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

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

suite('EventTemplatesHttpServiceV1', ()=> {    
    let service: EventTemplatesHttpServiceV1;
    let rest: any;

    suiteSetup((done) => {
        let persistence = new EventTemplatesMemoryPersistence();
        let controller = new EventTemplatesController();

        service = new EventTemplatesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('iqs-services-eventtemplates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-eventtemplates', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-eventtemplates', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        service.open(null, done);
    });
    
    suiteTeardown((done) => {
        service.close(null, done);
    });

    setup(() => {
        let url = 'http://localhost:3000';
        rest = restify.createJsonClient({ url: url, version: '*' });
    });
    
    
    test('CRUD Operations', (done) => {
        let template1, template2;

        async.series([
        // Create one template
            (callback) => {
                rest.post('/v1/event_templates/create_template',
                    {
                        template: TEMPLATE1
                    },
                    (err, req, res, template) => {
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
                rest.post('/v1/event_templates/create_template', 
                    {
                        template: TEMPLATE2
                    },
                    (err, req, res, template) => {
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
                rest.post('/v1/event_templates/get_templates',
                    {},
                    (err, req, res, page) => {
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

                rest.post('/v1/event_templates/update_template',
                    { 
                        template: template1
                    },
                    (err, req, res, template) => {
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
                rest.post('/v1/event_templates/delete_template_by_id',
                    {
                        template_id: template1.id
                    },
                    (err, req, res, result) => {
                        assert.isNull(err);

                        //assert.isNull(result);

                        callback();
                    }
                );
            },
        // Try to get delete template
            (callback) => {
                rest.post('/v1/event_templates/get_template_by_id',
                    {
                        template_id: template1.id
                    },
                    (err, req, res, result) => {
                        assert.isNull(err);

                        //assert.isNull(result);

                        callback();
                    }
                );
            }
        ], done);
    });
});