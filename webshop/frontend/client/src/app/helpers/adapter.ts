/* Author: mk303 */
export interface Adapter<T> {
  adapt(item: any): T;
}
