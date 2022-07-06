import { BehaviorSubject } from 'rxjs';
import { Service } from '../../../../services/service';
import { scan } from 'rxjs/operators';
export enum LOADING_STATUS {
  PENDING,
  SUCCESS,
  FAILED,
}

export enum NETWORK_ERROR_TYPE {
  NOTHING_LOADED = 'nothing-loaded',
  INTERNET_OVER = 'internet-over',
  SERVICE_UNAVAILABLE = 'service-unavailable',
}

export enum DIRECTION_TYPE {
  INCOMING = 'incoming',
  OUTGOING = 'outgoing',
  BALANCE = 'balance',
}
type Todo = {
  id: string;
  label: string;
  completed: boolean;
};

const initialTodos: Todo[] = [{ id: '1', label: 'new todo', completed: false }];

export class TodoStore extends Service {
  todos$ = new BehaviorSubject<Array<Todo>>(initialTodos);
  loadingStatus$ = new BehaviorSubject<LOADING_STATUS>(LOADING_STATUS.PENDING);
  error$ = new BehaviorSubject<NETWORK_ERROR_TYPE | undefined>(undefined);
  private isInitialLoadComplete = false;

  constructor() {
    super();
  }

  addTodo(todo: Todo): void {
    this.todos$.pipe(
      scan((todos) => {
        return [...todos, todo];
      })
    );
  }

  private handleError(error: Error): void {
    this.loadingStatus$.next(LOADING_STATUS.FAILED);
  }
}
