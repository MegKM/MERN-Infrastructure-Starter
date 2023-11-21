import LoginForm from "../../components/LogInForm/LogInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

function AuthPage({ setUser }){
    return (
        <main>
            <h1>AuthPage</h1>
            <SignUpForm setUser={ setUser }/>
            <LoginForm setUser={ setUser }/>
        </main>
    )
}

export default AuthPage;