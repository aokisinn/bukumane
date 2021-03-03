import React from "react";
import { useCallback, useState } from "react";
import apiClient from "../utils/apiClient";
import { BookType } from "../types/BookType";

export const useBookList = () => {
    const [bookList, setBookList] = useState<Array<BookType>>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | undefined>();
    const [currentPage, setCurrentPage] = useState(0);
    const [isLastPage, setIsLastPage] = useState(false);

    const getBookList = async (): Promise<void> => {
        setLoading(true);
        apiClient
            .get("/api/bookList", {
                params: {
                    page: currentPage + 1
                }
            })
            .then(res => {
                setLoading(false);
                const books = res.data.books.map(function(book) {
                    return {
                        id: book?.id,
                        title: book?.title,
                        author: book?.author,
                        caption: book?.caption,
                        publisher: book?.publisher,
                        isbn: book?.isbn,
                        large_image_url: book?.large_image_url,
                        medium_image_url: book?.medium_image_url,
                        small_image_url: book?.small_image_url,
                        item_url: book?.item_url,
                        sales_date: book?.sales_date,
                        price: book?.price,
                        size: book?.size,
                        created_at: book?.created_at,
                        updated_at: book?.updated_at
                    };
                });

                bookList.push(...books);
                setBookList(bookList);
                setCurrentPage(res.data.meta.current_page);
                if (res.data.links.next == null) {
                    setIsLastPage(true);
                }
            })
            .catch(err => {
                console.log(err.response);
                setLoading(false);
                setError(new Error("書籍情報の取得に失敗しました"));
            });
    };

    return { getBookList, bookList, loading, error, isLastPage };
};
