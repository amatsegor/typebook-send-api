import {AbstractMessageRouter} from "./AbstractMessageRouter";
import {SenderActionMessageBuilder} from "../message_builders/SenderActionMessageBuilder";
/**
 * Created by amatsegor on 5/25/17.
 */

export declare class SenderActionMessageRouter extends AbstractMessageRouter<SenderActionMessageBuilder> {

    to(recipientId: string): SenderActionMessageBuilder;
}