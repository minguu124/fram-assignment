import { memo } from "react";

interface TableHeaderProps {
  columns: string[];
}

const TableHeader = ({ columns }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        {columns.map((column: string, index: number) => (
          <th key={index.toString()}>{column}</th>
        ))}
      </tr>
    </thead>
  );
};

export default memo(TableHeader);
