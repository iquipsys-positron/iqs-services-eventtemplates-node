import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IdentifiableMemoryPersistence } from 'pip-services3-data-node';
import { EventTemplateV1 } from '../data/version1/EventTemplateV1';
import { IEventTemplatesPersistence } from './IEventTemplatesPersistence';
export declare class EventTemplatesMemoryPersistence extends IdentifiableMemoryPersistence<EventTemplateV1, string> implements IEventTemplatesPersistence {
    constructor();
    private matchString;
    private matchSearch;
    private contains;
    private composeFilter;
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<EventTemplateV1>) => void): void;
}
