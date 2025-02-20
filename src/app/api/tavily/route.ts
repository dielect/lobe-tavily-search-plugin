import {NextRequest} from 'next/server';
import {tavily, TavilySearchOptions} from '@tavily/core';

export const maxDuration = 60;


const client = tavily({apiKey: process.env.TAVILY_API_KEY});

export async function POST(request: NextRequest) {
    const jsonBody: TavilySearchOptions = await request.json();
    const query = jsonBody.query;
    if (!query) {
        return Response.json({error: 'query is required', code: -1}, {status: 400});
    }

    const searchDepth = jsonBody.searchDepth || "advanced";
    const timeRange = jsonBody.timeRange || "w";
    const includeAnswer = jsonBody.includeAnswer || false;

    const searchResponse = await client.search(query, {
        searchDepth: searchDepth,
        timeRange: timeRange,
        includeAnswer: includeAnswer,
        maxResults: 10,
    });
    return Response.json({
        code: 200,
        success: true,
        data: searchResponse,
    }, {status: 200});
}