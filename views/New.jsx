const React = require('react')

function New(){
    return(
        <div>
            < a href='/logs'>All Logs</a>
            <form action = '/logs' method = 'POST'>
            Title: <input type="text" name = "title"/>
            Entry: <input type="textarea" name = "entry"/>
            Ship is Broken: <input type="checkbox" name = "shipIsBroken"/>
             <input type="submit" value= "submit"/>
            </form>
        </div>
    )
}

module.exports = New