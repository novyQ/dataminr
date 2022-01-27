import lodash from "lodash";
import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";
import http from "http";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET",
};

const port = 5000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

// handler
async function handleDataPost(body, res) {
  const postParamBody = JSON.parse(body);

  await db.read();

  const section = db.data[postParamBody.section];
  if (!section) {
    console.error(`section ${postParamBody.section} not found`);
    return;
  }

  const element = section.find((el) => el.flag_id === postParamBody.flag_id);
  if (!element) {
    console.error(`element id ${postParamBody.flag_id} not found`);
  }

  if (!postParamBody.subflag_id) {
    // update main flag;
    if (postParamBody.field.isOn !== undefined) {
      element.isOn = postParamBody.field.isOn;
    }
    await db.write();

    if (postParamBody.field.inputNotes !== undefined) {
      element.inputNotes = postParamBody.field.inputNotes;
    }

    await db.write();
  } else {
    // update sub flag
    const subflagElement = element.subflags.find(
      (el) => el.subflag_id === postParamBody.subflag_id
    );

    if (postParamBody.field.isOn !== undefined) {
      subflagElement.isOn = postParamBody.field.isOn;
    }
    await db.write();

    if (postParamBody.field.inputNotes !== undefined) {
      subflagElement.inputNotes = postParamBody.field.inputNotes;
    }

    await db.write();
  }

  const response = db.data;

  if (response) {
    res.writeHead(200, { ...headers, "Content-Type": "application/json" });
    res.end(JSON.stringify(response));
  } else {
    res.writeHead(404, { ...headers, "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "update failed" }));
  }
}

const server = http.createServer(async (req, res) => {
  const location = new URL(req.url, `http://localhost:${port}`);
  db.chain = lodash.chain(db.data);
  // GET
  if (req.method === "GET" && location.pathname === "/api/flags") {
    await db.read();

    const response = db.data;

    if (response) {
      res.writeHead(200, { ...headers, "Content-Type": "application/json" });
      res.end(JSON.stringify(response));
    } else {
      res.writeHead(500, { ...headers, "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "data not found!" }));
    }
  }
  // POST
  if (req.method === "POST" && location.pathname === "/api/flags/post") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => handleDataPost(body, res));
  }
});

server.listen(port, () => console.log(`Server listening on port ${port}.`));
