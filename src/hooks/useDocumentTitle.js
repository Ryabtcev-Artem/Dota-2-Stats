import { useEffect } from "react";

export default function useDocumentTitle(pageTitle=''){
    useEffect(()=>{
        document.title = pageTitle
    },[])
}