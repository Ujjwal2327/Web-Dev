import React, { createContext, useState } from 'react'
import { baseUrl } from '../baseUrl';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();
    const [currentTag, setCurrentTag] = useState(null);
    const [currentCategory, setCurrentCategory] = useState(null);
    

    async function fetchBlogs(page=1, tag=null, category=null, blogId=null){
        setIsLoading(true);

        const url = `${baseUrl}/get-blogs?page=${page}`
        if(tag){
            url = `${baseUrl}/get-blogs?page=${page}&tag=${tag}`
        }

        if(category){
            url = `${baseUrl}/get-blogs?page=${page}&category=${category}`
        }

        if(blogId){
            url = `${baseUrl}/get-blog?blogId=${blogId}`;
        }

        try{
            const response = await fetch(url);
            const data = await response.json();

            setCurrentTag(tag);
            setCurrentCategory(category);
            if(blogId){
                setBlog(data.blog);
                setBlogs(data.relatedBlogs);
            }
            else{
                setCurrentPage(data.page);
                setTotalPages(data.totalPages);
                setBlogs(data.posts);
            }
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
    


    function currentPageHandler(page=1, tag=null, category=null){
        setCurrentPage(page);
        fetchBlogs(page, tag, category, null);
        if(tag){
            navigate(`/tags/${tag}?page=${page}`);
        }
        if(category){
            navigate(`/categories/${category}?page=${page}`);
        }
        else{
            navigate(`/?page=${page}`);
        }

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
        currentPageHandler,
        blog,
        setBlog,
        currentTag,
        setCurrentTag,
        currentCategory,
        setCurrentCategory
    }


    return (
        <AppContext.Provider value = {value}>
            {children}
        </AppContext.Provider>
    )
}