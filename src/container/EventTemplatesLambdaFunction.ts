import { Descriptor } from 'pip-services3-commons-node';
import { CommandableLambdaFunction } from 'pip-services3-aws-node';
import { EventTemplatesServiceFactory } from '../build/EventTemplatesServiceFactory';

export class EventTemplatesLambdaFunction extends CommandableLambdaFunction {
    public constructor() {
        super("event_templates", "Event templates function");
        this._dependencyResolver.put('controller', new Descriptor('iqs-services-eventtemplates', 'controller', 'default', '*', '*'));
        this._factories.add(new EventTemplatesServiceFactory());
    }
}

export const handler = new EventTemplatesLambdaFunction().getHandler();