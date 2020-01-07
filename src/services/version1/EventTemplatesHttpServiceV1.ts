import { Descriptor } from 'pip-services3-commons-node';
import { CommandableHttpService } from 'pip-services3-rpc-node';

export class EventTemplatesHttpServiceV1 extends CommandableHttpService {
    public constructor() {
        super('v1/event_templates');
        this._dependencyResolver.put('controller', new Descriptor('iqs-services-eventtemplates', 'controller', 'default', '*', '1.0'));
    }
}