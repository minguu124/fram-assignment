import { get } from "lodash";
import { memo } from "react";

interface TableHeaderProps {
  columns: string[];
  row: any;
}

const TableItem = ({ columns, row }: TableHeaderProps) => {
  return (
    <tr>
      {columns.map((column: string, index: number) => (
        <td key={index.toString()}>{get(row, `${column}`, "")}</td>
      ))}
    </tr>
  );
};

export default memo(TableItem);
