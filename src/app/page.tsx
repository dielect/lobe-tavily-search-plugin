'use client'


import SearchResultsGrid from "@/components/search-results-grid";
import { useWatchPluginMessage } from '@lobehub/chat-plugin-sdk/client';
import {TavilySearchResponse} from "@tavily/core";
import {SearchResult} from "@/app/api/tavily/_types";

interface SearchResponse {
    data: TavilySearchResponse
    code: number
}


export default function Home() {

    const { data, loading } = useWatchPluginMessage<SearchResponse>();

    if (loading) {
        return <div>Loading...</div>;
    }
    const searchResult: SearchResult[] = [];
    // 开始构造数据
    data.data.results.forEach((item, index) => {
        const domain = new URL(item.url).hostname;
        const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
        searchResult.push({
            id: index,
            icon:faviconUrl,
            title: item.title,
            content: item.content,
            url: item.url,
        })
    });

    return (
        <div className="mt-4 ml-2 mr-2">
            <SearchResultsGrid results={searchResult} />
        </div>
    )
}
