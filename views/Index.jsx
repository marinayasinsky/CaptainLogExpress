const React = require("react");

function Index({ logs }) {
  return (
    <div>
      <a href = "/createlog" >Create Logs</a>
      <ul>
        {logs.map((log, i) => {
          return (
            <li key={log._id}>
              Title: <a href={`/logs/${log._id}`}>{log.title}</a>
              < br/>
              Entry: {log.entry}
              < br/>
              {log.shipIsBroken ? "  Ship is broken" : "  Ship is good to go"}
              <a href={`/logs/${log._id}/edit`}> Edit</a>
              <form method="POST" action={`/logs/${log.id}?_method=DELETE`}>
                <input type="submit" value="X" />
              </form>
            </li>
            
          );
        })}
      </ul>
      <hr/>
    </div>
  );
}

module.exports = Index;