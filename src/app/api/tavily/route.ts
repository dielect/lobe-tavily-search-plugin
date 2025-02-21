import {
    PluginErrorType,
    createErrorResponse,
    getPluginSettingsFromRequest,
} from '@lobehub/chat-plugin-sdk';
import {tavily, TavilySearchOptions} from '@tavily/core';
import {Settings} from "@/app/api/tavily/_types";
import {NextRequest} from "next/server";


export const maxDuration = 60;


export async function POST(request: NextRequest) {
    const settings = getPluginSettingsFromRequest<Settings>(request);
    if (!settings) {
        return createErrorResponse(PluginErrorType.PluginSettingsInvalid, {
            message: 'Plugin settings not found.',
        });
    }
    const jsonBody: TavilySearchOptions = await request.json();
    const query = jsonBody.query;
    if (!query) {
        return Response.json({error: 'query is required', code: -1}, {status: 400});
    }

    const searchDepth = jsonBody.searchDepth || "advanced";
    const timeRange = jsonBody.timeRange || "w";
    const includeAnswer = jsonBody.includeAnswer || false;
    const apiKey = settings.TAVILY_API_KEY;
    if (!apiKey) {
        return Response.json({error: 'Authentication failed,please set api key', code: -1}, {status: 401});
    }

    const client = tavily({apiKey: apiKey});
    return client.search(query, {
        searchDepth: searchDepth,
        timeRange: timeRange,
        includeAnswer: includeAnswer,
        maxResults: 10,
    }).then((response) => {
        return Response.json({data: response, code: 200}, {status: 200});
    }).catch((err) => {
        return Response.json({error: "server error", code: err.status}, {status: err.status});
    });
}