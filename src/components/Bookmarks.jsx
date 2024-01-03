import host from "../utils/host";
import Layout from "./Layout";

export default function Bookmarks({ action, bookmarks }) {
  return (
    <Layout title="Bookmarks" description=" Bookmark manager powered by Jeasx">
      <form method="post">
        <header>
          <h1>Bookmarks</h1>
        </header>
        <main>
          {action === "edit" ? (
            <section>
              <textarea name="bookmarks">
                {bookmarks
                  .map(({ url, label }) => `${label}|${url}`)
                  .join("\n")}
              </textarea>
              <hr />
              <button type="submit" name="action" value="save">
                <img src="/save.svg" width="16" height="16" alt="" />
                Save
              </button>
              <button type="submit" name="action" value="cancel">
                <img src="/cancel.svg" width="16" height="16" alt="" />
                Cancel
              </button>
            </section>
          ) : (
            <section>
              {bookmarks.map(({ url, label }) => (
                <a href={url} target="_blank">
                  <img
                    src={`https://favicone.com/${host(url)}?s=32`}
                    width="16"
                    height="16"
                    alt=""
                  />
                  {label}
                </a>
              ))}
              <hr />
              <button type="submit" name="action" value="edit">
                <img src="/edit.svg" width="16" height="16" alt="" /> Edit
              </button>
            </section>
          )}
        </main>
      </form>
    </Layout>
  );
}
