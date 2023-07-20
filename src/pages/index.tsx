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
  {"Timestamp":"35 Mins Ago"},
  {"Purchase Id": "25001"},
  {"Mail":"pooja@gmail.com"},
  {"Name":"Pooja"},
 {"Source":""} ,
  {"Status":"failed"},
  {"Select":"select"}
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
