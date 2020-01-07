import { CommandSet } from 'pip-services3-commons-node';
import { IEventTemplatesController } from './IEventTemplatesController';
export declare class EventTemplatesCommandSet extends CommandSet {
    private _logic;
    constructor(logic: IEventTemplatesController);
    private makeGetEventTemplatesCommand;
    private makeGetEventTemplateByIdCommand;
    private makeCreateEventTemplateCommand;
    private makeUpdateEventTemplateCommand;
    private makeDeleteEventTemplateByIdCommand;
}
