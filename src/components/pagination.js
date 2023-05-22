import React, { useState, useEffect } from "react";
import { sendGet } from "../utils/api";

const PaginationComponent = ({
  enpoint,
  limit,
  totalPages,
  changePaginationData,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await sendGet(`/${enpoint}?page=${currentPage}`, {
        limit: limit,
      });
      changePaginationData(
        response.returnValue.data.map((e) => {
          return { ...e, place: e.province?.name ? e.province?.name : "" };
        })
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="paging">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <div
              className="paging__item"
              key={page}
              onClick={() => goToPage(page)}
              disabled={page === currentPage}
            >
              {page}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PaginationComponent;
