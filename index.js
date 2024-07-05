const { createServer } = require("http"); // http 서버 만들기
const app = require("./app"); // 아까 만든 app.js인 express 서버를 이용해서 만들기

const { Server } = require("socket.io"); // 수정된 부분
require("dotenv").config();

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000" // 웹 소켓도 cors를 열어줘야 함
    }
});

require("./utils/io")(io);

// 서버 열어두기
httpServer.listen(process.env.PORT, () => {
    console.log("server listening on port", process.env.PORT);
});
