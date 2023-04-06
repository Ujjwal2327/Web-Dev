import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    const baseUrl = 'https://codehelp-apis.vercel.app/api/get-blogs';
    
    async function fetchBlogs(page=1){
        setIsLoading(true);
        try{
            const response = await fetch(`${baseUrl}?page=${page}`);
            const data = await response.json();
            setCurrentPage(data.page);
            setTotalPages(data.totalPages);
            setBlogs(data.posts);
            console.log('data', data);
            console.log('jello', page, totalPages, isLoading, blogs);
        }
        catch(error){
            console.log('fetching data gone wrong');
            setCurrentPage(1);
            setTotalPages(1);
            setBlogs(null);
        }
        setIsLoading(false);
    }

    function currentPageHandler(currentPage){
        setCurrentPage(currentPage);
        fetchBlogs(currentPage);
    }


    const value = {
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        isLoading,
        setIsLoading,
        blogs,
        setBlogs,
        fetchBlogs,
        currentPageHandler
    }


    return (
        <AppContext.Provider value = {value}>
            {children}
        </AppContext.Provider>
    )
}