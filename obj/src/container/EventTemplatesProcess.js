"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const EventTemplatesServiceFactory_1 = require("../build/EventTemplatesServiceFactory");
class EventTemplatesProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("event_templates", "Event templates microservice");
        this._factories.add(new EventTemplatesServiceFactory_1.EventTemplatesServiceFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
    }
}
exports.EventTemplatesProcess = EventTemplatesProcess;
//# sourceMappingURL=EventTemplatesProcess.js.map