import { Client as McpClient } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function testMcpServer() {
  try {
    // 创建客户端传输
    const transport = new StdioClientTransport({
      command: "node",
      args: ["index.js"]
    });

    // 创建MCP客户端
    const client = new McpClient({
      name: "test-client",
      version: "1.0.0"
    });

    // 连接到服务器
    await client.connect(transport);
    console.log("成功连接到MCP服务器");

    // 测试html2md工具
    const html = "<h1>Hello World</h1><p>This is a <strong>test</strong>.</p><ul><li>Item 1</li><li>Item 2</li></ul>";
    console.log("输入HTML:", html);
    
    const result = await client.callTool("html2md", { html });
    console.log("转换结果:", result.content[0].text);
    
    // 断开连接
    await client.disconnect();
    console.log("断开与MCP服务器的连接");
  } catch (error) {
    console.error("测试过程中出现错误:", error);
  }
}

testMcpServer();