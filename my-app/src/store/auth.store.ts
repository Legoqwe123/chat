import { observable, action, makeObservable, computed } from "mobx";

import { fb, TFirebaseUser } from "../core/firebase";
import { ILoading, Loading } from "./loading.store";

export interface IAuth extends ILoading {
  isAuth: null | undefined | boolean;
  signIn: (body: {
    email: string;
    password: string;
  }) => Promise<void | TFirebaseUser>;
  signOut: () => void;
  checkIsAuth: () => void;
}

class AuthStore extends Loading implements IAuth {
  @observable auth: null | undefined | boolean = null;

  constructor() {
    super();

    makeObservable(this);

    this.checkIsAuth();
  }

  @computed get isAuth(): boolean | null | undefined {
    return this.auth;
  }

  @action setAuthTrue = () => (this.auth = true);

  @action setAuthFalse = () => (this.auth = false);

  @action signIn = (body: { email: string; password: string }) => {
    this.loadingSetStart();

    return fb
      .auth()
      .signInWithEmailAndPassword(body.email, body.password)
      .then((response) => {
        this.setAuthTrue();

        return response;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(this.loadingSetEnd);
  };

  @action signOut = () => {
    fb.auth()
      .signOut()
      .then(() => this.setAuthFalse())
      .catch((err) => console.log(err));
  };

  @action checkIsAuth = () =>
    fb
      .auth()
      .onAuthStateChanged((user) =>
        user ? this.setAuthTrue() : this.setAuthFalse()
      );
}

export const authStore = new AuthStore();
