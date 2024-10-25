import React, { useEffect } from "react";
import Button from "../Button/Button";
import useStore from "@/app/zustand/store";

export default function Pagination({ data, PerPage, currentPage, onPageChange, render }) {
    const filters = useStore((state) => state.filters.blogs);

    const indexOfLastItem = currentPage * PerPage;
    const indexOfFirstItem = indexOfLastItem - PerPage;

    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / PerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const handlePageChange = (page) => {
        onPageChange(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        onPageChange(1);
    }, [filters]);

    return (
        <div>
            {render(currentData)}
            <div className="flex justify-center mt-6 space-x-2">
                {pageNumbers.map((page) => (
                    <Button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        variant={'main'}
                        className={`${currentPage === page ? "!bg-[#D4AF37]" : ""}`}
                    >
                        {page}
                    </Button>
                ))}
            </div>
        </div>
    );
}
