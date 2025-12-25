import rawPublications from "../assets/json/publications.json";

export const publications = [...rawPublications].sort((a, b) => {
  if (b.citedBy !== a.citedBy) {
    return b.citedBy - a.citedBy;
  }
  return b.year - a.year;
});
