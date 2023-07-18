import DataTable from "../components/DataTable";

const headers = [
  "Timestamp",
  "Purchase Id",
  "Mail",
  "Name",
  "Source",
  "Status",
  "Select",
];
const rows = [
  // Your data rows here
];

const MyPage: React.FC = () => {
  return (
    <DataTable
      headers={headers}
      rows={rows}
      caption="Bookings"
      sortable
      pagination
    />
  );
};

export default MyPage;
