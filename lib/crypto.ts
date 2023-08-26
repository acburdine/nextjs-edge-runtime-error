// echo "this is a test" | base64
const testB64Key = "dGhpcyBpcyBhIHRlc3QK";

const message = "sign me!";

// base64 to buffer
function decode(base64: string): ArrayBuffer {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return bytes.buffer;
}

export async function test() {
  const keyBuf = decode(testB64Key);
  const key = await crypto.subtle.importKey(
    "raw",
    keyBuf,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );

  const dataBuf = new TextEncoder().encode(message);
  const signature = await crypto.subtle.sign("HMAC", key, dataBuf);
  return await crypto.subtle.verify("HMAC", key, signature, dataBuf);
}
