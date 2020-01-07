import { DataPage } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';

import { EventTemplateV1 } from '../data/version1/EventTemplateV1';

export interface IEventTemplatesController {
    getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<EventTemplateV1>) => void): void;

    getTemplateById(correlationId: string, template_id: string, 
        callback: (err: any, template: EventTemplateV1) => void): void;

    createTemplate(correlationId: string, template: EventTemplateV1, 
        callback: (err: any, template: EventTemplateV1) => void): void;

    updateTemplate(correlationId: string, template: EventTemplateV1, 
        callback: (err: any, template: EventTemplateV1) => void): void;

    deleteTemplateById(correlationId: string, template_id: string,
        callback: (err: any, template: EventTemplateV1) => void): void;
}
