import { useMemo } from "react";
import { Pagination } from "react-bootstrap";

interface PaginatorProps {
  current: number;
  total: number;
  onChange: (_: number) => void;
}

const Paginator = ({ current, total, onChange }: PaginatorProps) => {
  const pages = useMemo(
    () => [...Array(total).keys()].map((p) => p + 1),
    [total]
  );
  console.log(pages);
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      {pages.map((p: number) => (
        <Pagination.Item
          onClick={() => onChange(p)}
          active={p === current}
          key={p.toString()}
        >
          {p}
        </Pagination.Item>
      ))}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};

export default Paginator;
