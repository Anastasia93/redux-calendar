import { React } from 'react';

let Title = React.createClass({
    render: function() {
        return (
            <h1>Your personal calendar</h1>
        );
    }
}),
    nums = [8, 9 ,10 ,11, 12, 13, 14, 15, 16, 17],
    Calendar = React.createClass({
        render: function () {
            let data = this.props.data,
                calendarHours = data.map(function (num) {
                    let hourNum = num + ".00",
                        halfHourNum = num + ".30",
                        className = "hour hour-" + num;
                    if(num != data[data.length - 1]) {
                        return (
                            <div key={num} className={className}>
                                <span>{hourNum}</span>
                                <div className="half-an-hour">
                                    <span>{halfHourNum}</span>
                                </div>
                            </div>
                        )
                    }
                    return (
                        <div key={num} className={className}>
                            <span>{hourNum}</span>
                        </div>
                    )
                });
            return (
                <div className="calendar">
                    {calendarHours}
                </div>
            );
        }
    }),
    ButtonAdd = React.createClass({
        getInitialState: function() {
            return {
                active: false
            };
        },
        addCase: function(e) {
            e.preventDefault();
            let active = this.state.active;
            if(active) {
                this.setState({active: false});
                DialogAdding.setState({visible: false});
            }
            else {
                this.setState({active: true});
                DialogAdding.setState({visible: true});
            }
        },
        render: function () {
            return (
                <div className="buttons-container">
                    <button href="#" onClick={this.addCase}>Add case</button>
                </div>
            );
        }
    }),
    DialogAdding = React.createClass({
        getInitialState: function() {
            return {
                visible: false
            };
        },
        render: function () {
            let visible = this.state.visible;
            return (
                <div className={"dialog-adding" + visible ? " none" : " visible"}>
                    <form className="dialog">
                        <label>What do you want to do:</label>
                        <input type="text"/>
                        <label>When:</label>
                        <input type="text" placeholder="00"/>
                        <span>:</span>
                        <input type="text" placeholder="00"/>
                        <button type="submit">Save changes</button>
                    </form>
                </div>
            );
        }
    }),
    App = React.createClass({
    render: function() {
        return (
            <div className="container">
                <Title />
                <DialogAdding />
                <div className="calendar-container" >
                    <Calendar data={nums}/>
                </div>
                <ButtonAdd />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);