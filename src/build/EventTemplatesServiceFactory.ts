import { Factory } from 'pip-services3-components-node';
import { Descriptor } from 'pip-services3-commons-node';

import { EventTemplatesMongoDbPersistence } from '../persistence/EventTemplatesMongoDbPersistence';
import { EventTemplatesFilePersistence } from '../persistence/EventTemplatesFilePersistence';
import { EventTemplatesMemoryPersistence } from '../persistence/EventTemplatesMemoryPersistence';
import { EventTemplatesController } from '../logic/EventTemplatesController';
import { EventTemplatesHttpServiceV1 } from '../services/version1/EventTemplatesHttpServiceV1';

export class EventTemplatesServiceFactory extends Factory {
	public static Descriptor = new Descriptor("iqs-services-eventtemplates", "factory", "default", "default", "1.0");
	public static MemoryPersistenceDescriptor = new Descriptor("iqs-services-eventtemplates", "persistence", "memory", "*", "1.0");
	public static FilePersistenceDescriptor = new Descriptor("iqs-services-eventtemplates", "persistence", "file", "*", "1.0");
	public static MongoDbPersistenceDescriptor = new Descriptor("iqs-services-eventtemplates", "persistence", "mongodb", "*", "1.0");
	public static ControllerDescriptor = new Descriptor("iqs-services-eventtemplates", "controller", "default", "*", "1.0");
	public static HttpServiceDescriptor = new Descriptor("iqs-services-eventtemplates", "service", "http", "*", "1.0");
	
	constructor() {
		super();
		this.registerAsType(EventTemplatesServiceFactory.MemoryPersistenceDescriptor, EventTemplatesMemoryPersistence);
		this.registerAsType(EventTemplatesServiceFactory.FilePersistenceDescriptor, EventTemplatesFilePersistence);
		this.registerAsType(EventTemplatesServiceFactory.MongoDbPersistenceDescriptor, EventTemplatesMongoDbPersistence);
		this.registerAsType(EventTemplatesServiceFactory.ControllerDescriptor, EventTemplatesController);
		this.registerAsType(EventTemplatesServiceFactory.HttpServiceDescriptor, EventTemplatesHttpServiceV1);
	}
	
}
