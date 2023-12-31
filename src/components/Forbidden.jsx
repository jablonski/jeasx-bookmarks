import Layout from "./Layout";

export default function Forbidden() {
  return (
    <Layout title="Error 401">
      <header>
        <h1>Error 401</h1>
      </header>
      <main>
        <section>
          <h2>You are not allowed to view this page!</h2>
        </section>
      </main>
    </Layout>
  );
}
