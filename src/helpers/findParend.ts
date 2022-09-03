export function findParent(evt: { target: HTMLElement }, cn: string): Element | null {
  const element = evt.target.closest(cn);
  return element;
}
