import { spawn } from 'child_process';

// 启动MCP服务器
const server = spawn('node', ['index.js']);

server.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

server.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

server.on('close', (code) => {
  console.log(`服务器退出，退出码 ${code}`);
});

// 等待几秒钟让服务器启动
setTimeout(() => {
  console.log('服务器正在运行...');
  // 在这里我们可以发送MCP请求来测试功能
  // 但由于这是一个stdio服务器，我们需要更复杂的设置来测试
  server.kill();
}, 3000);