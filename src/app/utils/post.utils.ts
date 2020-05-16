export function createSummary(text: string, words: number): string {
  return `${text.split(' ').splice(0, words).join(' ')}...`;
}
