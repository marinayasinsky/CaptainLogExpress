const React = require("react");

function Edit({ log }) {
  return (
    <div>
      <form method = "POST" action={`/logs/${log._id}/?_method=PUT`}>
        Title:
        <input type="text" name="title" defaultValue={log.title} />
        Entry:
        <input type="textarea" name="entry" defaultValue={log.entry} />
        is Ship Broken?
        {log.shipIsBroken ? (
          <input type="checkbox" name="shipIsBroken" defaultChecked />
        ) : (
          <input type="checkbox" name="shipIsBroken" />
        )}
        <input type = "submit" value = "Submit Changes"/>
      </form>
    </div>
  );
}

module.exports = Edit;