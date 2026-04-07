import "../../assets/css/shopping.css";
// import "../../assets/css/styles.css";

// data type
import type { Course } from "../../data/Types";

// arrow to move between books
import { PaginationArrows } from "../common/pagination/Pagination";
import { usePagination } from "../../utilis/usePagination";

// grip
import Items from "../common/itemList/ItemList";

// insert into componet
import ProductCard from "./ProductCard";

interface BookSectionProps {
  courses: Course[];
  itemsPerPage?: number;
}

const CourseShopSection = ({ courses, itemsPerPage = 6 }: BookSectionProps) => {
  const {
    items: currentBooks,
    currentPage,
    totalPages,
    goToPage,
  } = usePagination(courses, itemsPerPage);

  return (
    <>
      <section className="products-section" id="sach">
        <div className="container">
          <h2 className="section-title">Sách bán chạy</h2>
          <Items<Course>
            items={currentBooks}
            columns={4}
            gap="2rem"
            renderItem={(course) => <ProductCard  {...course} />}
          />

          {totalPages > 1 && (
            <PaginationArrows
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
            />
          )}
        </div>
      </section>
    </>
  );
};
export default CourseShopSection;
