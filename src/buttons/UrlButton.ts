import {AbstractButton} from "./AbstractButton";
/**
 * Created by amatsegor on 5/24/17.
 */

export class UrlButton extends AbstractButton {
    title: string;
    url: string;
    webview_height_ratio: WebviewHeightRatio;
    messenger_extensions: boolean;
    fallback_url: string;
    webview_share_button: string;

    constructor(title: string, url: string, ratio?: WebviewHeightRatio, messengerExtensions?: boolean, fallbackUrl?: string) {
        super("web_url");
        this.title = title;
        this.url = url;
        this.messenger_extensions = messengerExtensions;
        this.fallback_url = fallbackUrl;
        this.webview_height_ratio = ratio;
    }

    withWebviewShareButtonEnabled(enabled: boolean){
        this.webview_share_button = enabled ? "SHOW" : "HIDE";
    }
}

export enum WebviewHeightRatio {
    compact, tall, full
}