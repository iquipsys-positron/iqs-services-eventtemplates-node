"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const EventTemplatesServiceFactory_1 = require("../build/EventTemplatesServiceFactory");
class EventTemplatesLambdaFunction extends pip_services3_aws_node_1.CommandableLambdaFunction {
    constructor() {
        super("event_templates", "Event templates function");
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor('iqs-services-eventtemplates', 'controller', 'default', '*', '*'));
        this._factories.add(new EventTemplatesServiceFactory_1.EventTemplatesServiceFactory());
    }
}
exports.EventTemplatesLambdaFunction = EventTemplatesLambdaFunction;
exports.handler = new EventTemplatesLambdaFunction().getHandler();
//# sourceMappingURL=EventTemplatesLambdaFunction.js.map