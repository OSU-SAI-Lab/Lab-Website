function PublicationsTable({ data }) {
    return (
      <table className="publications-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Cited by</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pub) => (
            <tr key={pub.id}>
              <td>
                <a
                  href={pub.links?.doi || pub.links?.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pub.title}
                </a>
                <div className="authors">
                  {pub.authors.join(", ")}
                </div>
                <div className="venue">
                  {pub.venue}
                </div>
              </td>
              <td className="cited">{pub.citedBy}</td>
              <td>{pub.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default PublicationsTable;
  