import app from "./app";

try {
  app.listen(app.get("port"), () => {
    console.log(`${app.get("port")}번 포트 서버가 열렸습니다`);
  });
} catch (err) {
  console.error(err);
}
