/**
 * @param {import("./types").RouteProps & { bookmarks: { url:string, label:string }[]}} props
 */
export default function Download({ reply, bookmarks }) {
  reply.header("Content-Type", "text/html; charset=UTF-8");
  reply.header("Content-Disposition", `attachment; filename="bookmarks.html"`);

  return /*html*/ `
<!DOCTYPE NETSCAPE-Bookmark-file-1>
<HTML>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<Title>Bookmarks</Title>
<H1>Bookmarks</H1>
<DT><H3 FOLDED>Favorites</H3>
<DL><p>
${bookmarks
  .map(({ url, label }) => `<DT><A HREF="${url.trim()}">${label}</A>`)
  .join("\n")}
</DL>
</HTML>
`.trim();
}
