const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

class MyFirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>See All The Pokemon!</h1>
            </div>
        )
    }
}

module.exports = MyFirstComponent