import serialize from 'serialize-javascript';

export default function template(body, initialData, userData) {
  /**
   * Creat a html template for server-side rendering.
   * Params - body: markup string from ReactDOMServer.renderToString()
   *          data: fetched data object from the graphql api
   */
  return `<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Pro MERN Stack</title>
<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" >
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
table.table-hover tr {cursor: pointer;}
.panel-title a {display: block; width: 100%; cursor: pointer;}
.footer {position: absolute; bottom: 0px; width: 100%;}
</style>
</head>
<body>
<!-- Page generated from template. -->
<div id="contents">${body}</div>
<script>
  window.__INITIAL_DATA__ = ${serialize(initialData)}
  window.__USER_DATA__ = ${serialize(userData)}
</script>
<script src="/env.js"></script>
<script src="/vendor.bundle.js"></script>
<script src="/app.bundle.js"></script>
</body>
</html>
`;
}
