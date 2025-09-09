import { Client as WorkflowClient } from "@upstash/workflow";

import { QSTAST_TOKEN, QSTASH_URL } from "./env.js";

export const WorkflowClient = new WorkflowClient({
    baseUrl: QSTASH_URL,
    token: QSTAST_TOKEN,
})