import { Router, Notifier } from '@secretarium/trustless-app';

export function say_hello (arg: ArrayBuffer): void {
    Notifier.notify(String.UTF8.encode('Hello, World !', true));
};

export function register_routes(): void {
    Router.addQuery(String.UTF8.encode('say_hello', true));
}
