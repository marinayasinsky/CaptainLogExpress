const React = require('react')

function Show({log}){
    return (
        <div>
            < a href = "/logs"> All Logs</a>
            <h1>{log.title}</h1>
            {log.entry}
            {log.shipIsBroken ? " Fix the ship" : " Lets finish the course"}
        </div>
    )
}

module.exports = Show