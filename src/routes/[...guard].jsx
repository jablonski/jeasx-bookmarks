import Forbidden from "../components/Forbidden";
import redis from "../utils/redis";

/**
 * @param {import("./types").RouteProps} props
 */
export default async function Guard({ request, reply }) {
  if (
    request.headers["authorization"] !==
    `Basic ${Buffer.from(process.env.BASIC_AUTH).toString("base64")}`
  ) {
    reply.header("WWW-Authenticate", 'Basic realm="Restricted Area');
    reply.status(401);
    return <Forbidden />;
  }

  const body = request.body || {};
  const action = body["action"];
  if (action === "save") {
    await redis.set(
      "bookmarks",
      body["bookmarks"].split("\n").map((bookmark) => {
        const [label, url] = bookmark.split("|");
        return { label, url };
      })
    );
  }

  const bookmarks = await redis.get("bookmarks");
  return { action, bookmarks };
}
