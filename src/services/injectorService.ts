export interface InjectorService {
  get<T>(identifier: symbol): T;
}
