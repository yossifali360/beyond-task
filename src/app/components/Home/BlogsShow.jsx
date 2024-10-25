"use client";
import React, { useMemo, useState } from "react";
import BlogCard from "../Shared/BlogCard/BlogCard";
import { useNewsBlogsData, useGuardianBlogsData } from "@/app/queries/queries";
import { Spinner } from "../Shared/Spinner/Spinner";
import { NoData } from "../Shared/NoDataComponent/NoData";
import SearchComponent from "../Shared/SearchComponent/SearchComponent";
import Pagination from "../Shared/Pagination/Pagination";

export default function BlogsShow() {
  const { data: newsBlogs, isLoading: newsIsLoading } = useNewsBlogsData();
  const { data: guardianBlogs, isLoading: guardianIsLoading } = useGuardianBlogsData();

  const isLoading = newsIsLoading || guardianIsLoading;

  const combinedBlogs = useMemo(() => {
    return [...(newsBlogs || []), ...(guardianBlogs || [])];
  }, [newsBlogs, guardianBlogs]);

  const [currentPage, setCurrentPage] = useState(1);

  let content;
  if (isLoading) {
    content = <Spinner />;
  } else if (!combinedBlogs?.length) {
    content = <NoData />;
  } else {
    content = (
      <div>
        <Pagination
          data={combinedBlogs}
          PerPage={12}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          render={(currentData) => (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
              {currentData.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
            </div>
          )}
        />
      </div>
    );
  }

  return (
    <>
      <div className="container my-16 overflow-hidden">
        <SearchComponent isLoading={isLoading} name={"blogs"} />
        {content}
      </div>
    </>
  );
}
