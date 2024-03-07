export const chageTagToPath = (tag: string) => {
  return tag.trim().replace(/'/g, '').replace(' ', '-').toLowerCase();
};
