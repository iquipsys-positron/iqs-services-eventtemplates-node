import { ConfigParams } from 'pip-services3-commons-node';
import { IConfigurable } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { IReferenceable } from 'pip-services3-commons-node';
import { DependencyResolver } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ICommandable } from 'pip-services3-commons-node';
import { CommandSet } from 'pip-services3-commons-node';

import { EventTemplateV1 } from '../data/version1/EventTemplateV1';
import { IEventTemplatesPersistence } from '../persistence/IEventTemplatesPersistence';
import { IEventTemplatesController } from './IEventTemplatesController';
import { EventTemplatesCommandSet } from './EventTemplatesCommandSet';

export class EventTemplatesController implements  IConfigurable, IReferenceable, ICommandable, IEventTemplatesController {
    private static _defaultConfig: ConfigParams = ConfigParams.fromTuples(
        'dependencies.persistence', 'iqs-services-eventtemplates:persistence:*:*:1.0'
    );

    private _dependencyResolver: DependencyResolver = new DependencyResolver(EventTemplatesController._defaultConfig);
    private _persistence: IEventTemplatesPersistence;
    private _commandSet: EventTemplatesCommandSet;

    public configure(config: ConfigParams): void {
        this._dependencyResolver.configure(config);
    }

    public setReferences(references: IReferences): void {
        this._dependencyResolver.setReferences(references);
        this._persistence = this._dependencyResolver.getOneRequired<IEventTemplatesPersistence>('persistence');
    }

    public getCommandSet(): CommandSet {
        if (this._commandSet == null)
            this._commandSet = new EventTemplatesCommandSet(this);
        return this._commandSet;
    }
    
    public getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<EventTemplateV1>) => void): void {
        this._persistence.getPageByFilter(correlationId, filter, paging, callback);
    }

    public getTemplateById(correlationId: string, id: string, 
        callback: (err: any, template: EventTemplateV1) => void): void {
        this._persistence.getOneById(correlationId, id, callback);        
    }

    public createTemplate(correlationId: string, template: EventTemplateV1, 
        callback: (err: any, template: EventTemplateV1) => void): void {
        this._persistence.create(correlationId, template, callback);
    }

    public updateTemplate(correlationId: string, template: EventTemplateV1, 
        callback: (err: any, template: EventTemplateV1) => void): void {
        this._persistence.update(correlationId, template, callback);
    }

    public deleteTemplateById(correlationId: string, id: string,
        callback: (err: any, template: EventTemplateV1) => void): void {  
        this._persistence.deleteById(correlationId, id, callback);
    }

}
