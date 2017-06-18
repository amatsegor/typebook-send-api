/**
 * Created by amatsegor on 5/24/17.
 */

import {AbstractMessageRouter} from "./AbstractMessageRouter";
import {UrlMessageBuilder} from "../message_builders/UrlMessageBuilder";
import {FacebookMessage} from "../models/FacebookMessage";
import {AttachmentMessageBuilder} from "../message_builders/AttachmentMessageBuilder";

export declare class UrlMessageRouter extends AbstractMessageRouter<UrlMessageBuilder> {
    private url: string;
    private type: string;

    constructor(type: string, url: string);

    to(recipientId: string): UrlMessageBuilder;
}