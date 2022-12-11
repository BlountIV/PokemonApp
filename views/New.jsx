const React = require("react");

class New extends React.Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" type="text/css" href="../css/style.css" />
                <h1>Find New Pokemon</h1>
                <form action='/pokemon' method='POST'>
                    Name: <input type='text' name='name'/>
                    {/* Img: <input type='text' name='img'/> */}
                    <br />
                    <input type='submit' name='' value='Find Pokemon'/>
                </form>
                <a href="/pokemon">Back to found Pokemon</a>
            </div>
        );
    }
}

module.exports = New;