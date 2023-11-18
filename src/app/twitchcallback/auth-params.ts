export default class AuthParams {
  code: string;
  scope: string;
  state: string;

  constructor(params: URLSearchParams) {
    this.code = AuthParams.getOrThrow(params, 'code');
    this.scope = AuthParams.getOrThrow(params, 'scope');
    this.state = AuthParams.getOrThrow(params, 'state');
  }

  private static getOrThrow(params: URLSearchParams, key: string): string {
    const value = params.get(key);
    if (value === null) throw 'value not found';
    return value;
  }

}
