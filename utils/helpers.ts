export function makeStyles(
  baseStyles: string,
  moreStyles: string | undefined
): string {
  if (moreStyles) {
    return baseStyles.concat(" ", moreStyles);
  }
  return baseStyles;
}

export function setLocalStorage(itemName: string, itemValue: string): void {
  localStorage.setItem(itemName, itemValue);
}

export function readLocalStorage(itemName: string): string | null {
  return localStorage.getItem(itemName);
}
