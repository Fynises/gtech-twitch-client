/**
 * helper function that offers a shortcut to checking if its being called on the client
 * @param fn functional parameter containing a localStorage reference as the parameter
 * @returns T if the value is present
 *  null if the value is not present or if being called from a non browser context
 */
export default function localStorageHelper<T>(fn: (ls: Storage) => T): T | undefined {
  if (typeof window !== 'undefined') {
    return fn(localStorage);
  }
}
