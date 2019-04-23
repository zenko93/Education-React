import React, {Component} from "react"

class App extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: 'blue'

        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target;
        type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    render() {
        return (
            <form>
                <input type="text"
                       name="firstName"
                       value={this.state.firstName}
                       placeholder="First Name" onChange={this.handleChange}/>
                <br/>
                <input type="text"
                       name="lastName"
                       value={this.state.lastName}
                       placeholder="Last Name" onChange={this.handleChange}/>

                <br/>
                <textarea
                    value={"Some default value"}
                    onChange={this.handleChange}
                />

                <br/>
                <label>
                    <input
                        type="checkbox"
                        name='isFriendly'
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    />Is friendly?
                </label>

                <br/>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>

                <br/>
                <label>Favorite Color:</label>
                <select
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                </select>

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2><font color="#3AC1EF">{this.state.gender ? "You are a " + this.state.gender : null}</font></h2>
                <h2><font color="#3AC1EF">Your favorite color is {this.state.favColor}</font></h2>


            </form>
        )
    }
}

export default App


// import React, {Component} from "react"
//
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             loading: false,
//             character: {}
//         }
//     }
//
//     componentDidMount() {
//         this.setState({loading: true});
//         fetch("https://swapi.co/api/people/1")
//             .then(response => response.json())
//             .then(data =>{
//                 this.setState({
//                     loading: false,
//                     character: data
//                 })
//             })
//     }
//
//     render() {
//         const text = this.state.loading? 'Loading...': this.state.character.name;
//
//         return (
//             <div>
//                 {text}
//             </div>
//         )
//     }
// }
//
// export default App


// import React, {Component} from "react"
// import Check from "./Check";
//
// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             goIn: false
//         }
//     }
//
//     render() {
//         let buttonText = this.state.goIn? 'Log In': 'Log Out'
//         return (
//             <div>
//                 {console.log(this.state.goIn)}
//                 <h1>{buttonText}</h1>
//
//                 <button onClick={this.goInsade}>{buttonText}</button>
//             </div>
//
//     )
//     }
//
//
//     goInsade = () =>{
//         this.setState({
//             goIn: !this.state.goIn
//         })
//     }
// }
//
//
// export default App