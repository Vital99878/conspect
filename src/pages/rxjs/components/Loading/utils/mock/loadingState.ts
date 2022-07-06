import { BehaviorSubject } from 'rxjs';
import { LOADING_STATUS } from '../../../../../../enums';

export const loading$ = new BehaviorSubject(LOADING_STATUS.PENDING);
