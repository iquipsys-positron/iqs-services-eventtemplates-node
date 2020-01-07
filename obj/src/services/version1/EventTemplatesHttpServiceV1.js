"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class EventTemplatesHttpServiceV1 extends pip_services3_rpc_node_1.CommandableHttpService {
    constructor() {
        super('v1/event_templates');
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor('iqs-services-eventtemplates', 'controller', 'default', '*', '1.0'));
    }
}
exports.EventTemplatesHttpServiceV1 = EventTemplatesHttpServiceV1;
//# sourceMappingURL=EventTemplatesHttpServiceV1.js.map