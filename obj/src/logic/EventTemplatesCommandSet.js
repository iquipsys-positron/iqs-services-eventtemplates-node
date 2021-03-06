"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const pip_services3_commons_node_4 = require("pip-services3-commons-node");
const pip_services3_commons_node_5 = require("pip-services3-commons-node");
const pip_services3_commons_node_6 = require("pip-services3-commons-node");
const pip_services3_commons_node_7 = require("pip-services3-commons-node");
const pip_services3_commons_node_8 = require("pip-services3-commons-node");
const EventTemplateV1Schema_1 = require("../data/version1/EventTemplateV1Schema");
class EventTemplatesCommandSet extends pip_services3_commons_node_1.CommandSet {
    constructor(logic) {
        super();
        this._logic = logic;
        // Register commands to the database
        this.addCommand(this.makeGetEventTemplatesCommand());
        this.addCommand(this.makeGetEventTemplateByIdCommand());
        this.addCommand(this.makeCreateEventTemplateCommand());
        this.addCommand(this.makeUpdateEventTemplateCommand());
        this.addCommand(this.makeDeleteEventTemplateByIdCommand());
    }
    makeGetEventTemplatesCommand() {
        return new pip_services3_commons_node_2.Command("get_templates", new pip_services3_commons_node_5.ObjectSchema(true)
            .withOptionalProperty('filter', new pip_services3_commons_node_7.FilterParamsSchema())
            .withOptionalProperty('paging', new pip_services3_commons_node_8.PagingParamsSchema()), (correlationId, args, callback) => {
            let filter = pip_services3_commons_node_3.FilterParams.fromValue(args.get("filter"));
            let paging = pip_services3_commons_node_4.PagingParams.fromValue(args.get("paging"));
            this._logic.getTemplates(correlationId, filter, paging, callback);
        });
    }
    makeGetEventTemplateByIdCommand() {
        return new pip_services3_commons_node_2.Command("get_template_by_id", new pip_services3_commons_node_5.ObjectSchema(true)
            .withRequiredProperty('template_id', pip_services3_commons_node_6.TypeCode.String), (correlationId, args, callback) => {
            let template_id = args.getAsString("template_id");
            this._logic.getTemplateById(correlationId, template_id, callback);
        });
    }
    makeCreateEventTemplateCommand() {
        return new pip_services3_commons_node_2.Command("create_template", new pip_services3_commons_node_5.ObjectSchema(true)
            .withRequiredProperty('template', new EventTemplateV1Schema_1.EventTemplateV1Schema()), (correlationId, args, callback) => {
            let template = args.get("template");
            this._logic.createTemplate(correlationId, template, callback);
        });
    }
    makeUpdateEventTemplateCommand() {
        return new pip_services3_commons_node_2.Command("update_template", new pip_services3_commons_node_5.ObjectSchema(true)
            .withRequiredProperty('template', new EventTemplateV1Schema_1.EventTemplateV1Schema()), (correlationId, args, callback) => {
            let template = args.get("template");
            this._logic.updateTemplate(correlationId, template, callback);
        });
    }
    makeDeleteEventTemplateByIdCommand() {
        return new pip_services3_commons_node_2.Command("delete_template_by_id", new pip_services3_commons_node_5.ObjectSchema(true)
            .withRequiredProperty('template_id', pip_services3_commons_node_6.TypeCode.String), (correlationId, args, callback) => {
            let templateId = args.getAsNullableString("template_id");
            this._logic.deleteTemplateById(correlationId, templateId, callback);
        });
    }
}
exports.EventTemplatesCommandSet = EventTemplatesCommandSet;
//# sourceMappingURL=EventTemplatesCommandSet.js.map