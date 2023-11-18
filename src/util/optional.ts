/**
 * experimental functional wrapper class for nullable values
 * inspired by Java and Rust
 */
export class Optional<T> {
  private readonly value: T | null;

  /**
   * constructs new optional value given a nullable;
   */
  constructor(value: T | null | undefined) {
    if (value === undefined || value === null) {
      this.value = null;
    } else {
      this.value = value;
    }
  }

  /**
   * gets the value unchecked
   * @returns the value when not null, throws error otherwise
   */
  get(): T {
    if (this.value !== null) {
      return this.value;
    } else {
      throw new Error('value get was undefined');
    }
  }

  or(other: T): T {
    if (this.value !== null) {
      return this.value;
    } else {
      return other;
    }
  }

  /**
   * applies the function if value is present
   */
  ifPresent(fn: (value: T) => unknown): this {
    if (this.value !== null) {
      fn(this.value);
      return this;
    } else {
      return this;
    }
  }
}
