import { Subject } from 'rxjs';

export abstract class Service implements IService {
  protected unsubscribe$: Subject<void> = new Subject();

  destroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

export interface IService {
  destroy(): void;
}
