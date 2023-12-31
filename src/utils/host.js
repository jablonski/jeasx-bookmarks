/**
 * @param {string} url
 */
export default function host(url) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}
