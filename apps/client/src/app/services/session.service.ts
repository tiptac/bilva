import { HttpClient } from '@angular/common/http';
import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SessionService {
  user: WritableSignal<unknown>;
  loggedIn: Signal<boolean>;

  constructor(private http: HttpClient) {
    this.user = signal<unknown>(undefined);
    this.loggedIn = computed(() => {
      const user = this.user();
      return !!user;
    });
  }

  check() {
    return this.http.get('api/session').pipe(
      tap((user) => {
        this.user.set(user);
      })
    );
  }

  delete() {
    return this.http.delete('api/session').pipe(
      tap(() => {
        this.user.set(undefined);
      })
    );
  }

  create(credentials: { username: string; password: string }) {
    return this.http.post('api/session', credentials).pipe(
      tap((user) => {
        this.user.set(user);
      })
    );
  }
}
