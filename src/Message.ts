import {TextMessageRouter} from "./routers/TextMessageRouter";
import {AttachmentMessageRouter} from "./routers/AttachmentMessageRouter";
import {UrlMessageRouter} from "./routers/UrlMessageRouter";
import {QuickReplyRouter} from "./routers/QuickReplyMessageRouter";
import {SenderActionMessageRouter} from "./routers/SenderActionMessageRouter";
/**
 * Created by amatsegor on 5/22/17.
 */

export class Message {
    static textMessage(message: string, metadata?: string): TextMessageRouter {
        return new TextMessageRouter(message, metadata)
    }

    static audioMessage(audioUrl: string): UrlMessageRouter {
        return new UrlMessageRouter("audio", audioUrl);
    }

    static fileMessage(fileUrl: string): UrlMessageRouter {
        return new UrlMessageRouter("file", fileUrl);
    }

    static videoMessage(videoUrl: string): UrlMessageRouter {
        return new UrlMessageRouter("video", videoUrl);
    }

    static imageMessage(videoUrl: string): UrlMessageRouter {
        return new UrlMessageRouter("image", videoUrl);
    }

    static attachmentMessage(): AttachmentMessageRouter {
        return new AttachmentMessageRouter()
    }

    static quickReplyMessage(): QuickReplyRouter {
        return new QuickReplyRouter()
    }

    static senderActionMessage(): SenderActionMessageRouter {
        return new SenderActionMessageRouter()
    }
}