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

  return (
    <Pagination>
      <Pagination.First onClick={() => onChange(1)} />
      <Pagination.Prev
        disabled={current <= 1}
        onClick={() => onChange(current - 1)}
      />
      {pages.map((p: number) => (
        <Pagination.Item
          onClick={() => onChange(p)}
          active={p === current}
          key={p.toString()}
        >
          {p}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={current >= total}
        onClick={() => onChange(current + 1)}
      />
      <Pagination.Last onClick={() => onChange(total)} />
    </Pagination>
  );
};

export default Paginator;
