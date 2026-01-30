import React, { useMemo } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

export default function PublicationDetail() {
  const { rows, loading } = useOutletContext();
  const { id } = useParams();

  const pub = useMemo(() => {
    const idNum = Number(id);
    return rows.find((r) => r.id === idNum);
  }, [rows, id]);

  if (loading) return <div style={{ padding: 16 }}>Loading…</div>;

  if (!pub) {
    return (
      <div style={{ padding: 16 }}>
        <p>Publication not found.</p>
        <Link to="/publications">← Back to Publications</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 16, maxWidth: 900 }}>
      <p>
        <Link to="/publications">← Back to Publications</Link>
      </p>

      <h1 style={{ marginBottom: 6 }}>{pub.title}</h1>

      <p style={{ marginTop: 0 }}>
        <strong>Authors:</strong> {pub.authorsArr?.join("; ")}
      </p>

      {pub.venue && (
        <p>
          <strong>Venue:</strong> {pub.venue}
        </p>
      )}

      {pub.year && (
        <p>
          <strong>Year:</strong> {pub.year}
        </p>
      )}

      {pub.publisher && (
        <p>
          <strong>Publisher:</strong> {pub.publisher}
        </p>
      )}

      {pub.link && (
        <p>
          <strong>Link:</strong>{" "}
          <a href={pub.link} target="_blank" rel="noreferrer">
            View publication
          </a>
        </p>
      )}

      {pub.description && (
        <>
          <h3>Description</h3>
          <p>{pub.description}</p>
        </>
      )}
    </div>
  );
}
