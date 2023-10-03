import express from "express";

const main = () => {
  const PORT = 8000;
  const app = express();

  app.use(express.static("dist/public/"));

  app.listen(PORT, () => {
    console.log("Listening at", PORT);
  });
};

main();
