export default function Edit({ bookmarks }) {
  return (
    <section>
      <textarea name="bookmarks">
        {bookmarks.map(({ url, label }) => `${label}|${url}`).join("\n")}
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
  );
}
