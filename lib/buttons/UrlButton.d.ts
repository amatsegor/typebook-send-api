import {AbstractButton} from "./AbstractButton";
/**
 * Created by amatsegor on 5/24/17.
 */

export declare class UrlButton extends AbstractButton {
    title: string;
    url: string;
    webview_height_ratio: WebviewHeightRatio;
    messenger_extensions: boolean;
    fallback_url: string;
    webview_share_button: string;

    constructor(title: string, url: string, ratio?: WebviewHeightRatio, messengerExtensions?: boolean, fallbackUrl?: string);

    withWebviewShareButtonEnabled(enabled: boolean);
}

export declare enum WebviewHeightRatio {
    compact, tall, full
}