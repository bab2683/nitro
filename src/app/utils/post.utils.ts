export function createSummary(text: string = '', words: number = 3): string {
  return text && words && words > 0
    ? `${text.split(' ').splice(0, words).join(' ')}...`
    : '';
}
