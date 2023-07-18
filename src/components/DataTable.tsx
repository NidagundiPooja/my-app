import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useState } from "react";

interface DataTableProps {
  headers: string[];
  rows: any[]; // Replace `any` with the appropriate type for your data
  caption?: string;
  sortable?: boolean;
  pagination?: boolean;
}
const DataTable: React.FC<DataTableProps> = ({
  headers,
  rows,
  caption,
  sortable,
  pagination,
}) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Helper function to sort the rows based on the selected column and direction
  const sortRows = (data: any[], column: string, direction: string) => {
    const sortedRows = [...data];

    sortedRows.sort((a, b) => {
      if (direction === "asc") {
        return a[column].localeCompare(b[column]);
      } else {
        return b[column].localeCompare(a[column]);
      }
    });

    return sortedRows;
  };

  // Helper function to paginate the rows
  const paginateRows = (data: any[], page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // Event handler for column header click to toggle sorting
  const handleHeaderClick = (column: string) => {
    if (!sortable) return;

    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  // Sort and paginate the rows based on the current settings
  let sortedRows = rows;
  if (sortColumn && sortDirection) {
    sortedRows = sortRows(rows, sortColumn, sortDirection);
  }

  let paginatedRows = sortedRows;
  if (pagination) {
    paginatedRows = paginateRows(sortedRows, currentPage);
  }

  return (
    <Box>
      {caption && <caption>{caption}</caption>}
      <Table>
        <Thead>
          <Tr>
            {headers.map((header) => (
              <Th
                key={header}
                onClick={() => handleHeaderClick(header)}
                cursor={sortable ? "pointer" : "default"}
              >
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {paginatedRows.map((row, index) => (
            <Tr key={index}>
              {headers.map((header) => (
                <Td key={header}>{row[header]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DataTable;
