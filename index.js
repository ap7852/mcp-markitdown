import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import TurndownService from "turndown";

const server = new McpServer({
  name: "mcp-markitdown",
  version: "1.0.0",
});

// Initialize TurndownService for HTML to Markdown conversion
const turndownService = new TurndownService();

server.tool(
  "html2md",
  "把 HTML 转成 Markdown",
  { html: { type: "string" } },
  async ({ html }) => {
    try {
      const markdown = turndownService.turndown(html);
      return { 
        content: [{ type: "text", text: markdown }],
        isError: false
      };
    } catch (error) {
      return { 
        content: [{ type: "text", text: "Error converting HTML to Markdown: " + error.message }],
        isError: true
      };
    }
  }
);

const transport = new StdioServerTransport();
server.connect(transport);