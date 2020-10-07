export default {
  formatDate(date: string) {
    const sections = date.split('-');
    return `${sections[1]}/${sections[2]}/${sections[0]}`;
  }
};

export interface IndexedObj<T> {
  [index: string]: T;
}
