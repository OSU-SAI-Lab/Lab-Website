import publications from "../../assets/json/publications.json";
import { useMemo, useState } from "react";
import PublicationsTable from "./PublicationsTable";
import "../../assets/css/publicationspage.css";

function PublicationsPage() {
  const [yearFilter, setYearFilter] = useState("all");
  const [authorFilter, setAuthorFilter] = useState("");

  // Unique years (auto-derived, zero maintenance)
  const years = useMemo(() => {
    return [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);
  }, []);

  // Filtered publications
  const filteredPublications = useMemo(() => {
    return publications.filter(pub => {
      const matchesYear =
        yearFilter === "all" || pub.year === Number(yearFilter);

      const matchesAuthor =
        authorFilter.trim() === "" ||
        pub.authors.some(author =>
          author.toLowerCase().includes(authorFilter.toLowerCase())
        );

      return matchesYear && matchesAuthor;
    });
  }, [yearFilter, authorFilter]);

  return (
    <>
      <div className="publication-filters">
        <select value={yearFilter} onChange={e => setYearFilter(e.target.value)}>
          <option value="all">All Years</option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Filter by lastname"
          value={authorFilter}
          onChange={e => setAuthorFilter(e.target.value)}
        />
      </div>

      <PublicationsTable data={filteredPublications} />
    </>
  );
}

export default PublicationsPage;
