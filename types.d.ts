declare module "dom-path" {
  export function resolve(from: Node, to: number[]): Node;
  export function relative(from: Node, to: Node): number[];
}
