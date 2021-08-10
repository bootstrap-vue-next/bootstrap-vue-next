export const isElement = (el: HTMLElement): boolean => !!(el && el.nodeType === Node.ELEMENT_NODE);

export const getActiveElement = (excludes = []): Element | null => {
  const { activeElement } = document;
  return activeElement && !excludes.some((el: HTMLElement) => el === activeElement) ? activeElement : null;
};

export const isActiveElement = (el: HTMLElement): boolean => isElement(el) && el === getActiveElement();

export const attemptFocus = (el: HTMLElement, options = {}): boolean => {
  try {
    el.focus(options);
  } catch (e) {
    console.error(e);
  }
  return isActiveElement(el);
};

// Attempt to blur an element, and return `true` if successful
export const attemptBlur = (el: HTMLElement): boolean => {
  try {
    el.blur();
  } catch (e) {
    console.error(e);
  }
  return !isActiveElement(el);
};
