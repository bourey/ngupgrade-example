/** Wrapper for the router outlet promise resolution resources. */
export interface RouterOutletPromise {
  /** Promise representing the availability of the <router-outlet> element. */
  done: Promise<void>;
  /** Resolution function passed to the promise. */
  resolve: Function|null;
}