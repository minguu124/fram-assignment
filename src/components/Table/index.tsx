import React, { Fragment, useMemo } from "react";
import { Table as BootstrapTable } from "react-bootstrap";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

export interface Column {
  id: number;
  prop: string;
  label?: string;
}

interface TableProps {
  data: any[];
  columns: Column[];
}

const Table = ({ data, columns }: TableProps) => {
  const headerCols: string[] = useMemo(() => {
    if (!columns || !columns.length) return [];
    return columns.reduce((acc: string[], c: Column) => {
      acc[c.id] = c.label || "";
      return acc;
    }, []);
  }, [columns]);

  const itemCols: string[] = useMemo(() => {
    if (!columns || !columns.length) return [];
    return columns.reduce((acc: string[], c: Column) => {
      acc[c.id] = c.prop;
      return acc;
    }, []);
  }, [columns]);

  return (
    <Fragment>
      <BootstrapTable striped bordered hover responsive>
        <TableHeader columns={headerCols} />
        <tbody>
          {data.map((item, index) => (
            <TableItem columns={itemCols} key={index.toString()} row={item} />
          ))}
        </tbody>
      </BootstrapTable>
    </Fragment>
  );
};

export default Table;
