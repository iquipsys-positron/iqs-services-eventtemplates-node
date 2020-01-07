"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const EventTemplatesMongoDbPersistence_1 = require("../persistence/EventTemplatesMongoDbPersistence");
const EventTemplatesFilePersistence_1 = require("../persistence/EventTemplatesFilePersistence");
const EventTemplatesMemoryPersistence_1 = require("../persistence/EventTemplatesMemoryPersistence");
const EventTemplatesController_1 = require("../logic/EventTemplatesController");
const EventTemplatesHttpServiceV1_1 = require("../services/version1/EventTemplatesHttpServiceV1");
class EventTemplatesServiceFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(EventTemplatesServiceFactory.MemoryPersistenceDescriptor, EventTemplatesMemoryPersistence_1.EventTemplatesMemoryPersistence);
        this.registerAsType(EventTemplatesServiceFactory.FilePersistenceDescriptor, EventTemplatesFilePersistence_1.EventTemplatesFilePersistence);
        this.registerAsType(EventTemplatesServiceFactory.MongoDbPersistenceDescriptor, EventTemplatesMongoDbPersistence_1.EventTemplatesMongoDbPersistence);
        this.registerAsType(EventTemplatesServiceFactory.ControllerDescriptor, EventTemplatesController_1.EventTemplatesController);
        this.registerAsType(EventTemplatesServiceFactory.HttpServiceDescriptor, EventTemplatesHttpServiceV1_1.EventTemplatesHttpServiceV1);
    }
}
exports.EventTemplatesServiceFactory = EventTemplatesServiceFactory;
EventTemplatesServiceFactory.Descriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-eventtemplates", "factory", "default", "default", "1.0");
EventTemplatesServiceFactory.MemoryPersistenceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-eventtemplates", "persistence", "memory", "*", "1.0");
EventTemplatesServiceFactory.FilePersistenceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-eventtemplates", "persistence", "file", "*", "1.0");
EventTemplatesServiceFactory.MongoDbPersistenceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-eventtemplates", "persistence", "mongodb", "*", "1.0");
EventTemplatesServiceFactory.ControllerDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-eventtemplates", "controller", "default", "*", "1.0");
EventTemplatesServiceFactory.HttpServiceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-eventtemplates", "service", "http", "*", "1.0");
//# sourceMappingURL=EventTemplatesServiceFactory.js.map