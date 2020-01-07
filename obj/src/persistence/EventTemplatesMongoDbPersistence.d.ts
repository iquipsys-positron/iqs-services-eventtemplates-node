import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-node';
import { EventTemplateV1 } from '../data/version1/EventTemplateV1';
import { IEventTemplatesPersistence } from './IEventTemplatesPersistence';
export declare class EventTemplatesMongoDbPersistence extends IdentifiableMongoDbPersistence<EventTemplateV1, string> implements IEventTemplatesPersistence {
    constructor();
    private composeFilter;
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<EventTemplateV1>) => void): void;
}
