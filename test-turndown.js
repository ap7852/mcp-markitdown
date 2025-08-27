// 创建一个简单的测试来验证HTML到Markdown转换功能
import TurndownService from "turndown";

// Initialize TurndownService for HTML to Markdown conversion
const turndownService = new TurndownService();

// 测试用的HTML内容
const testHtml = `
  <h1>标题</h1>
  <p>这是一个段落。</p>
  <ul>
    <li>列表项1</li>
    <li>列表项2</li>
  </ul>
  <a href="https://example.com">链接</a>
`;

console.log("输入HTML:");
console.log(testHtml);

try {
  const markdown = turndownService.turndown(testHtml);
  console.log("\n输出Markdown:");
  console.log(markdown);
} catch (error) {
  console.error("转换错误:", error);
}