import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function PageNotFound({}) {
  return (
    <Layout title="404 - Resource Not Found">
      <h1>Error 404</h1>
    </Layout>
  );
}
