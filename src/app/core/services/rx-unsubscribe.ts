import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class RxUnsubscribe implements OnDestroy {
  private _destroy$: Subject<void> = new Subject();
  destroy$ = this._destroy$.asObservable();

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
