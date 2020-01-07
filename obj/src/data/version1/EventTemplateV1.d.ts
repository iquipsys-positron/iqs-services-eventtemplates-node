import { IStringIdentifiable } from 'pip-services3-commons-node';
export declare class EventTemplateV1 implements IStringIdentifiable {
    id: string;
    org_id: string;
    severity: number;
    description: string;
    set_time?: boolean;
    set_object?: boolean;
    set_pos?: boolean;
}
