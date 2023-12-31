/**
 * @param {string} command
 */
async function redis(command, options = {}) {
  return await (
    await fetch(`${process.env.KV_REST_API_URL}/${command}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: process.env.KV_REST_API_TOKEN,
      },
      ...options,
    })
  ).json();
}

/**
 * @param {string} id
 * @param {object} data
 */
async function set(id, data) {
  return await redis(`json.set/${id}/$`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

/**
 * @param {string} id
 */
async function get(id) {
  return JSON.parse((await redis(`json.get/${id}`)).result);
}

/**
 * @param {string} id
 */
async function del(id) {
  return await redis(`json.del/${id}`);
}

export default { set, get, del };
