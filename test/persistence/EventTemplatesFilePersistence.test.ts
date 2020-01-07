import { ConfigParams } from 'pip-services3-commons-node';

import { EventTemplatesFilePersistence } from '../../src/persistence/EventTemplatesFilePersistence';
import { EventTemplatesPersistenceFixture } from './EventTemplatesPersistenceFixture';

suite('EventTemplatesFilePersistence', ()=> {
    let persistence: EventTemplatesFilePersistence;
    let fixture: EventTemplatesPersistenceFixture;
    
    setup((done) => {
        persistence = new EventTemplatesFilePersistence('./data/event_templates.test.json');

        fixture = new EventTemplatesPersistenceFixture(persistence);

        persistence.open(null, (err) => {
            persistence.clear(null, done);
        });
    });
    
    teardown((done) => {
        persistence.close(null, done);
    });
        
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

    test('Get with Filters', (done) => {
        fixture.testGetWithFilter(done);
    });

});