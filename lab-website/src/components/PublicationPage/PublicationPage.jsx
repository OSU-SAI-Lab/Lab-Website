import React, { useMemo, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

export default function PublicationsPage() {
  const { rows, loading } = useOutletContext();
  const [yearFilter, setYearFilter] = useState("all");
  const [authorFilter, setAuthorFilter] = useState("");

  const years = useMemo(() => {
    const ys = rows.map((r) => r.year).filter((y) => Number.isFinite(y));
    return [...new Set(ys)].sort((a, b) => b - a);
  }, [rows]);

  const filtered = useMemo(() => {
    const needle = authorFilter.trim().toLowerCase();

    return rows.filter((r) => {
      const matchesYear =
        yearFilter === "all" || r.year === Number(yearFilter);

      const matchesAuthor =
        needle === "" ||
        r.authorsArr?.some((a) => a.toLowerCase().includes(needle));

      return matchesYear && matchesAuthor;
    });
  }, [rows, yearFilter, authorFilter]);

  if (loading) return <div style={{ padding: 16 }}>Loading…</div>;

  return (
    <div style={{ padding: 16 }}>
      <h2>Publications</h2>

      {/* Filters */}
      <div style={{ display: "flex", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
        <label>
          Year:&nbsp;
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
          >
            <option value="all">All</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>

        <label>
          Author:&nbsp;
          <input
            value={authorFilter}
            onChange={(e) => setAuthorFilter(e.target.value)}
            placeholder="Type a last name…"
          />
        </label>

        <div style={{ marginLeft: "auto" }}>
          Showing {filtered.length} / {rows.length}
        </div>
      </div>

      {/* Table */}
      <table
        border="1"
        cellPadding="8"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th align="left">Title</th>
            <th align="left">Authors</th>
            <th align="left">Year</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((row) => (
            <tr key={row.id}>
              <td>
                <Link to={`/publications/${row.id}`}>{row.title}</Link>
              </td>
              <td>{row.authorsArr?.join("; ")}</td>
              <td>{row.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
