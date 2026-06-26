const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <body style="font-family: Arial; text-align: center; padding: 50px; background: #1a1a2e; color: white;">
        <h1>🚀 DevOps Pipeline Live!</h1>
        <p>Deployed via Docker + GitHub Actions CI/CD</p>
        <p>Built by <strong>Ubani Onu Chukwu</strong> — Senior Telecom & DevOps Engineer</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
