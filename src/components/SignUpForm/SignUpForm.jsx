import { Component } from 'react';
import { signUp } from '../../utilities/users-service.js';

class SignUpForm extends Component{
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            error: ''
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            //delete what you dont want
            // const formData = {...this.state}; // copy state to new object
            // delete formData.error;
            // delete formData.confirm;
            // console.log(formData)

            //keep what you do want
            const formData = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            }

            const user = await signUp(formData);
            this.props.setUser(user)
        } catch (err){
            this.setState({error: 'Sign up failed, try again.'});
        }
    }

    render(){
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <label>Name</label>&nbsp;
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required /><br/>
                        <label>Email</label>&nbsp;
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required /><br/>
                        <label>Password</label>&nbsp;
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required /><br/>
                        <label>Confirm</label>&nbsp;
                        <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required /><br/>
                        <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        )
    }
}

export default SignUpForm;