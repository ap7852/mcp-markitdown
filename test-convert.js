import { McpClient } from "@modelcontextprotocol/sdk/client/mcp.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function testConversion() {
  try {
    const transport = new StdioClientTransport({
      command: "node",
      args: ["index.js"]
    });

    const client = new McpClient({
      name: "test-client",
      version: "1.0.0"
    });

    await client.connect(transport);

    // 测试HTML到Markdown转换
    const html = "<h1>Hello World</h1><p>This is a test.</p>";
    const result = await client.callTool("html2md", { html });
    
    console.log("HTML:", html);
    console.log("Markdown:", result);
    
    await client.disconnect();
  } catch (error) {
    console.error("Error:", error);
  }
}

testConversion();