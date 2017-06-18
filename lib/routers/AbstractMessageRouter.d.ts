/**
 * Created by amatsegor on 5/24/17.
 */

export declare abstract class AbstractMessageRouter<T> {
    abstract to(recipientId: string): T;
}