import { LoggerMessage } from "./loggerMessage";
import { msgType } from "./typer";
export declare function log(message: (any | LoggerMessage) | (any | LoggerMessage[])): void;
export declare const logger: (type: msgType, message: string) => void;
