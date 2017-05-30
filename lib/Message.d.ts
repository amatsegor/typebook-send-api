import {TextMessageRouter} from "../src/routers/TextMessageRouter";
import {AttachmentMessageRouter} from "../src/routers/AttachmentMessageRouter";
import {UrlMessageRouter} from "../src/routers/UrlMessageRouter";
import {QuickReplyRouter} from "../src/routers/QuickReplyMessageRouter";
import {SenderActionMessageRouter} from "../src/routers/SenderActionMessageRouter";
/**
 * Created by amatsegor on 5/30/17.
 */

export declare class Message {
    static textMessage(message: string, metadata?: string): TextMessageRouter;

    static audioMessage(audioUrl: string): UrlMessageRouter;

    static fileMessage(fileUrl: string): UrlMessageRouter;

    static videoMessage(videoUrl: string): UrlMessageRouter;

    static imageMessage(videoUrl: string): UrlMessageRouter;

    static attachmentMessage(): AttachmentMessageRouter;

    static quickReplyMessage(): QuickReplyRouter;

    static senderActionMessage(): SenderActionMessageRouter;
}

export default Message;