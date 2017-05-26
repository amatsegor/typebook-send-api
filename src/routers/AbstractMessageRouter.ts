/**
 * Created by amatsegor on 5/24/17.
 */

export abstract class AbstractMessageRouter<T> {
    abstract to(recipientId: string): T;
}