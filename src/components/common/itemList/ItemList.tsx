// src/components/common/Items.tsx
import React from "react";
import "./ItemList.css";

interface ItemsProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
  /** Số cột trên desktop (mặc định 3) */
  columns?: 1 | 2 | 3 | 4;
  gap?: string;
}

/**
 * Component Grid tái sử dụng - Hiển thị danh sách dưới dạng lưới
 * Dùng cho Team, Courses, Books, Coaches, v.v.
 */
const Items = <T,>({
  items,
  renderItem,
  className = "",
  columns = 3,
  gap = "2rem",
}: ItemsProps<T>) => {
  return (
    <div
      className={`grid-list ${className}`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: gap,
      }}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
      ))}
    </div>
  );
};

export default Items;
