import { ConfigParams } from 'pip-services3-commons-node';

import { EventTemplatesMemoryPersistence } from '../../src/persistence/EventTemplatesMemoryPersistence';
import { EventTemplatesPersistenceFixture } from './EventTemplatesPersistenceFixture';

suite('EventTemplatesMemoryPersistence', ()=> {
    let persistence: EventTemplatesMemoryPersistence;
    let fixture: EventTemplatesPersistenceFixture;
    
    setup((done) => {
        persistence = new EventTemplatesMemoryPersistence();
        persistence.configure(new ConfigParams());
        
        fixture = new EventTemplatesPersistenceFixture(persistence);
        
        persistence.open(null, done);
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