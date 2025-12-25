import publications from "../../assets/json/publications.json";
import PublicationsTable from "./PublicationsTable";

function PublicationsPage() {
  return <PublicationsTable data={publications} />;
}

export default PublicationsPage;
