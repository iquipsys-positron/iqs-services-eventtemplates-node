"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const EventTemplatesCommandSet_1 = require("./EventTemplatesCommandSet");
class EventTemplatesController {
    constructor() {
        this._dependencyResolver = new pip_services3_commons_node_2.DependencyResolver(EventTemplatesController._defaultConfig);
    }
    configure(config) {
        this._dependencyResolver.configure(config);
    }
    setReferences(references) {
        this._dependencyResolver.setReferences(references);
        this._persistence = this._dependencyResolver.getOneRequired('persistence');
    }
    getCommandSet() {
        if (this._commandSet == null)
            this._commandSet = new EventTemplatesCommandSet_1.EventTemplatesCommandSet(this);
        return this._commandSet;
    }
    getTemplates(correlationId, filter, paging, callback) {
        this._persistence.getPageByFilter(correlationId, filter, paging, callback);
    }
    getTemplateById(correlationId, id, callback) {
        this._persistence.getOneById(correlationId, id, callback);
    }
    createTemplate(correlationId, template, callback) {
        this._persistence.create(correlationId, template, callback);
    }
    updateTemplate(correlationId, template, callback) {
        this._persistence.update(correlationId, template, callback);
    }
    deleteTemplateById(correlationId, id, callback) {
        this._persistence.deleteById(correlationId, id, callback);
    }
}
exports.EventTemplatesController = EventTemplatesController;
EventTemplatesController._defaultConfig = pip_services3_commons_node_1.ConfigParams.fromTuples('dependencies.persistence', 'iqs-services-eventtemplates:persistence:*:*:1.0');
//# sourceMappingURL=EventTemplatesController.js.map