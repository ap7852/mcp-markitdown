# CLAUDE.md

此文件为在该代码库中工作的Claude Code (claude.ai/code)提供指导。

## 项目概述
这是一个MCP（Model Context Protocol）服务器，提供HTML到Markdown的转换功能。它使用Turndown库将HTML内容转换为Markdown格式，并将此功能作为MCP工具暴露出来。

## 主要依赖
- `@modelcontextprotocol/sdk`：用于创建MCP服务器的Model Context Protocol SDK
- `turndown`：用于将HTML转换为Markdown的库

## 代码结构
- `index.js`：主入口点，创建一个带有`html2md`工具的MCP服务器，用于将HTML转换为Markdown
- `package.json`：项目元数据和依赖项

## 开发命令
- `npm run dev`：在开发模式下运行服务器
- `npm test`：运行测试（当前未配置）

## 架构
服务器实现了Model Context Protocol，暴露了一个工具：
- `html2md`：接收HTML内容作为输入并返回Markdown内容

服务器使用stdio传输与MCP客户端进行通信。