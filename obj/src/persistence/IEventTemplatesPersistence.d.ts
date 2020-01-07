import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IGetter } from 'pip-services3-data-node';
import { IWriter } from 'pip-services3-data-node';
import { EventTemplateV1 } from '../data/version1/EventTemplateV1';
export interface IEventTemplatesPersistence extends IGetter<EventTemplateV1, string>, IWriter<EventTemplateV1, string> {
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<EventTemplateV1>) => void): void;
    getOneById(correlationId: string, id: string, callback: (err: any, item: EventTemplateV1) => void): void;
    create(correlationId: string, item: EventTemplateV1, callback: (err: any, item: EventTemplateV1) => void): void;
    update(correlationId: string, item: EventTemplateV1, callback: (err: any, item: EventTemplateV1) => void): void;
    deleteById(correlationId: string, id: string, callback: (err: any, item: EventTemplateV1) => void): void;
}
