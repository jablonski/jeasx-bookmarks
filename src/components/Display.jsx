import host from "../utils/host";

export default function Display({ bookmarks }) {
  return (
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
      <a href="/bookmarks.html">
        <img src="/download.svg" width="16" height="16" alt="" />
        Download
      </a>
    </section>
  );
}
