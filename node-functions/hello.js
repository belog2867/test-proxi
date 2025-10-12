// File path ./node-functions/hello.js
// Access path example.com/hello
export default function onRequest(context) {
  return new Response('Hello from Node Functions!');
}
