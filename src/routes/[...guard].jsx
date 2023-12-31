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

  const form = request.body || {};
  const action = form["action"];
  if (action === "save") {
    await redis.set(
      "bookmarks",
      form["bookmarks"].split("\n").map((bookmark) => {
        const [label, url] = bookmark.split("|");
        return { label, url };
      })
    );
  }

  const bookmarks = await redis.get("bookmarks");
  return { action, bookmarks };
}
