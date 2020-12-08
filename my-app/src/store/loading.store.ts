import { computed, observable, action } from "mobx";

export interface ILoading {
  loading: boolean;
  loadingSetEnd: () => void;
  loadingSetStart: () => void;
  isLoading: boolean;
}

export class Loading {
  @observable loading = true;

  @computed get isLoading() {
    return this.loading;
  }

  @action loadingSetEnd = () => (this.loading = false);
  @action loadingSetStart = () => (this.loading = true);
}
