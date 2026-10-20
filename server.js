const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>DataVision Analytics</title>
                <style>
                    body { font-family: Arial, sans-serif; background: #0f172a; color: #f8fafc; text-align: center; padding-top: 50px; }
                    .card { background: #1e293b; display: inline-block; padding: 30px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.5); }
                    h1 { color: #38bdf8; }
                </style>
            </head>
            <body>
                <div class="card">
                    <h1>DataVision Analytics</h1>
                    <p>Aplicación desplegada automáticamente con AWS CodeDeploy.</p>
                </div>
            </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log("DataVision ejecutándose en puerto 3000");
});