import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';

import { EventTemplatesServiceFactory } from '../build/EventTemplatesServiceFactory';

export class EventTemplatesProcess extends ProcessContainer {

    public constructor() {
        super("event_templates", "Event templates microservice");
        this._factories.add(new EventTemplatesServiceFactory);
        this._factories.add(new DefaultRpcFactory);
    }

}
