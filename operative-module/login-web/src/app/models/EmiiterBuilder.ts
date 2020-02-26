import { EventEmitter, Output } from '@angular/core';

export class EmiiterBuilder {
    
    public static emitterUpdate(emitter: any, bool: Boolean) {
        bool =! bool;
        emitter.emit(bool.toString());
    }

    public static emitterUpdateObject(emitter: any, obj: any) {
        emitter.emit(obj);
    }
}