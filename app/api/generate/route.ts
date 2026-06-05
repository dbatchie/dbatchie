import Anthropic from "@anthropic-ai/sdk";
import { buildSystemPrompt, buildUserPrompt, type GenerateParams } from "@/lib/prompts";

export const maxDuration = 120;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { trade, docType, businessName, jobTitle, specificFocus, state } = body;

    if (!trade || !docType || !businessName) {
      return new Response("Missing required fields: trade, docType, businessName", { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response("API key not configured", { status: 500 });
    }

    const client = new Anthropic({ apiKey });

    const params: GenerateParams = { trade, docType, businessName, jobTitle, specificFocus, state };

    const stream = client.messages.stream({
      model: "claude-opus-4-8",
      thinking: { type: "adaptive" },
      max_tokens: 12000,
      system: buildSystemPrompt(trade, docType),
      messages: [{ role: "user", content: buildUserPrompt(params) }],
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
        } catch (err) {
          controller.error(err);
          return;
        }
        controller.close();
      },
      cancel() {
        stream.abort();
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-store",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unexpected error";
    return new Response(message, { status: 500 });
  }
}
