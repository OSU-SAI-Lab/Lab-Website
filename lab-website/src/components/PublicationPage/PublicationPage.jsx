import React, { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function PublicationsPage() {
  const { rows, loading } = useOutletContext();
  const [activeCategory, setActiveCategory] = useState("Journals");

  const categories = [
    "Books", 
    "Journals", 
    "Book Chapters", 
    "Conferences & Workshops", 
    "Technical Reports", 
    "Ph.D. Dissertations", 
    "M.S. Theses", 
    "B.S. Theses"
  ];

  const filtered = useMemo(() => {
    return rows.filter((r) => {
      // Clean up the type from CSV to remove hidden spaces/newlines
      const rowType = r.type?.trim();
      
      // Logic to bridge singular CSV data with plural sidebar labels
      if (activeCategory === "Journals") return rowType === "Journal" || rowType === "Journals";
      if (activeCategory === "Books") return rowType === "Book" || rowType === "Books";
      if (activeCategory === "Conferences & Workshops") return rowType === "Conference" || rowType === "Conferences & Workshops";
      if (activeCategory === "Technical Reports") return rowType === "Technical Report" || rowType === "Technical Reports";
      
      // Default for exact matches (like Theses or Dissertations)
      return rowType === activeCategory;
    }).sort((a, b) => b.year - a.year);
  }, [rows, activeCategory]);

  if (loading) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <div style={{ display: "flex", fontFamily: "sans-serif", padding: "20px", gap: "40px" }}>
      {/* Sidebar */}
      <div style={{ width: "220px", flexShrink: 0 }}>
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: "12px 15px",
              border: "1px solid #ddd",
              marginBottom: "-1px",
              cursor: "pointer",
              backgroundColor: activeCategory === cat ? "#f4f4f4" : "white",
              fontWeight: activeCategory === cat ? "bold" : "normal",
              fontSize: "14px",
              color: "#333",
              borderLeft: activeCategory === cat ? "4px solid #337ab7" : "1px solid #ddd",
              transition: "all 0.2s"
            }}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ flexGrow: 1 }}>
        <h2 style={{ borderBottom: "2px solid #337ab7", paddingBottom: "10px", color: "#333" }}>
          {activeCategory} ({filtered.length})
        </h2>
        
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
          <tbody>
            {filtered.map((pub, index) => (
              <tr key={pub.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "15px 10px", verticalAlign: "top", width: "30px", color: "#999", fontSize: "13px" }}>
                  {index + 1}
                </td>
                <td style={{ padding: "15px 10px", fontSize: "14px", lineHeight: "1.6" }}>
                  <div style={{ color: "#337ab7", marginBottom: "4px" }}>
                    {pub.authorsArr.map((auth, i) => (
                      <React.Fragment key={i}>
                        {auth.toLowerCase().includes("subramoni") ? <strong>{auth}</strong> : auth}
                        {i < pub.authorsArr.length - 1 ? ", " : ""}
                      </React.Fragment>
                    ))}
                  </div>
                  <strong>{pub.title}</strong>, {pub.venue}, {pub.year}.
                  {pub.link && (
                    <div style={{ marginTop: "8px" }}>
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{ color: "#337ab7", textDecoration: "none", fontSize: "12px", fontWeight: "bold" }}
                      >
                        [Full Text]
                      </a>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filtered.length === 0 && (
          <p style={{ color: "#999", marginTop: "20px", textAlign: "center" }}>
            No publications found in this category.
          </p>
        )}
      </div>
    </div>
  );
}