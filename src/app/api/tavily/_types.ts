export interface Settings {
    TAVILY_API_KEY?: string;
}

export interface SearchResult {
    id: number
    title: string
    icon: string
    content: string
    url: string
}