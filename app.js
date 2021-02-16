class Container extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div>
                    Hey ProGrads! Welcome to React Learning 
                </div>
                <div>
                    Let's rock and roll
                </div>
            </div>
        );
    }
}

const container = document.getElementById('react-container');
ReactDOM.render(<Container />,container);