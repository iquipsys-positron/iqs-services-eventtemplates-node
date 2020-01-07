import { CommandSet } from 'pip-services3-commons-node';
import { ICommand } from 'pip-services3-commons-node';
import { Command } from 'pip-services3-commons-node';
import { Schema } from 'pip-services3-commons-node';
import { Parameters } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { ObjectSchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';
import { FilterParamsSchema } from 'pip-services3-commons-node';
import { PagingParamsSchema } from 'pip-services3-commons-node';

import { EventTemplateV1 } from '../data/version1/EventTemplateV1';
import { EventTemplateV1Schema } from '../data/version1/EventTemplateV1Schema';
import { IEventTemplatesController } from './IEventTemplatesController';

export class EventTemplatesCommandSet extends CommandSet {
    private _logic: IEventTemplatesController;

    constructor(logic: IEventTemplatesController) {
        super();

        this._logic = logic;

        // Register commands to the database
		this.addCommand(this.makeGetEventTemplatesCommand());
		this.addCommand(this.makeGetEventTemplateByIdCommand());
		this.addCommand(this.makeCreateEventTemplateCommand());
		this.addCommand(this.makeUpdateEventTemplateCommand());
		this.addCommand(this.makeDeleteEventTemplateByIdCommand());
    }

	private makeGetEventTemplatesCommand(): ICommand {
		return new Command(
			"get_templates",
			new ObjectSchema(true)
				.withOptionalProperty('filter', new FilterParamsSchema())
				.withOptionalProperty('paging', new PagingParamsSchema()),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let filter = FilterParams.fromValue(args.get("filter"));
                let paging = PagingParams.fromValue(args.get("paging"));
                this._logic.getTemplates(correlationId, filter, paging, callback);
            }
		);
	}

	private makeGetEventTemplateByIdCommand(): ICommand {
		return new Command(
			"get_template_by_id",
			new ObjectSchema(true)
				.withRequiredProperty('template_id', TypeCode.String),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let template_id = args.getAsString("template_id");
                this._logic.getTemplateById(correlationId, template_id, callback);
            }
		);
	}

	private makeCreateEventTemplateCommand(): ICommand {
		return new Command(
			"create_template",
			new ObjectSchema(true)
				.withRequiredProperty('template', new EventTemplateV1Schema()),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let template = args.get("template");
                this._logic.createTemplate(correlationId, template, callback);
            }
		);
	}

	private makeUpdateEventTemplateCommand(): ICommand {
		return new Command(
			"update_template",
			new ObjectSchema(true)
				.withRequiredProperty('template', new EventTemplateV1Schema()),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let template = args.get("template");
                this._logic.updateTemplate(correlationId, template, callback);
            }
		);
	}
	
	private makeDeleteEventTemplateByIdCommand(): ICommand {
		return new Command(
			"delete_template_by_id",
			new ObjectSchema(true)
				.withRequiredProperty('template_id', TypeCode.String),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let templateId = args.getAsNullableString("template_id");
                this._logic.deleteTemplateById(correlationId, templateId, callback);
			}
		);
	}

}