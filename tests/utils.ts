export const createContainer = (tag = "div"): HTMLElement => {
  const container = document.createElement(tag);
  document.body.appendChild(container);
  return container;
};

export const waitNT = (ctx: { $nextTick: (value: unknown) => void }): Promise<void> => new Promise((resolve) => ctx.$nextTick(resolve));
export const waitRAF = (): Promise<number> => new Promise((resolve) => requestAnimationFrame(resolve));
