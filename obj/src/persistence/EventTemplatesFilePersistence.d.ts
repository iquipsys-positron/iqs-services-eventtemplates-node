import { ConfigParams } from 'pip-services3-commons-node';
import { JsonFilePersister } from 'pip-services3-data-node';
import { EventTemplatesMemoryPersistence } from './EventTemplatesMemoryPersistence';
import { EventTemplateV1 } from '../data/version1/EventTemplateV1';
export declare class EventTemplatesFilePersistence extends EventTemplatesMemoryPersistence {
    protected _persister: JsonFilePersister<EventTemplateV1>;
    constructor(path?: string);
    configure(config: ConfigParams): void;
}
