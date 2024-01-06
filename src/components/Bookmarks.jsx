import Display from "./Display";
import Edit from "./Edit";
import Layout from "./Layout";

export default function Bookmarks({ action, bookmarks }) {
  return (
    <Layout
      title="Bookmarks"
      description="Cross browser bookmark manager powered by jeasx"
    >
      <form method="post">
        <header>
          <h1>Bookmarks</h1>
        </header>
        <main>
          {action === "edit" ? (
            <Edit bookmarks={bookmarks} />
          ) : (
            <Display bookmarks={bookmarks} />
          )}
        </main>
      </form>
    </Layout>
  );
}
