import { ObjectSchema } from 'pip-services3-commons-node';
import { ArraySchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';

export class EventTemplateV1Schema extends ObjectSchema {
    public constructor() {
        super();
        this.withOptionalProperty('id', TypeCode.String);
        this.withRequiredProperty('org_id', TypeCode.String);
        this.withRequiredProperty('severity', TypeCode.Integer);
        this.withRequiredProperty('description', TypeCode.String);
        this.withOptionalProperty('set_time', TypeCode.Boolean);
        this.withOptionalProperty('set_object', TypeCode.Boolean);
        this.withOptionalProperty('set_pos', TypeCode.Boolean);
    }
}
