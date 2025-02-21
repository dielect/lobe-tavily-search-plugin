import { createGatewayOnEdgeRuntime } from '@lobehub/chat-plugins-gateway';
import {NextRequest} from "next/server";

export const config = {
    runtime:"edge",
}

export async function POST(req: NextRequest)  {
    return createGatewayOnEdgeRuntime()(req);
}
