"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
class EventTemplateV1Schema extends pip_services3_commons_node_1.ObjectSchema {
    constructor() {
        super();
        this.withOptionalProperty('id', pip_services3_commons_node_2.TypeCode.String);
        this.withRequiredProperty('org_id', pip_services3_commons_node_2.TypeCode.String);
        this.withRequiredProperty('severity', pip_services3_commons_node_2.TypeCode.Integer);
        this.withRequiredProperty('description', pip_services3_commons_node_2.TypeCode.String);
        this.withOptionalProperty('set_time', pip_services3_commons_node_2.TypeCode.Boolean);
        this.withOptionalProperty('set_object', pip_services3_commons_node_2.TypeCode.Boolean);
        this.withOptionalProperty('set_pos', pip_services3_commons_node_2.TypeCode.Boolean);
    }
}
exports.EventTemplateV1Schema = EventTemplateV1Schema;
//# sourceMappingURL=EventTemplateV1Schema.js.map