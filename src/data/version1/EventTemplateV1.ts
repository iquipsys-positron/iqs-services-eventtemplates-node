import { IStringIdentifiable } from 'pip-services3-commons-node';

export class EventTemplateV1 implements IStringIdentifiable {
    public id: string;
    public org_id: string;
    public severity: number;
    public description: string;
    public set_time?: boolean;
    public set_object?: boolean;
    public set_pos?: boolean;
}