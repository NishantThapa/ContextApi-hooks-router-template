import React from 'react'
import { LocaleConsumer } from '../Context/ContextApi'
import {
    useHistory
} from "react-router-dom";
export default function Login() {
    let history = useHistory();
    return (
        <LocaleConsumer>
            {props => {
                if (props.loginState) {
                    history.push("/home")
                }
                return (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                        <div>
                            <p>Email</p>
                            <input type="text" name="email" onChange={props.onChange} />
                        </div>
                        <div>
                            <p>Password</p>
                            <input type="text" name="password" onChange={props.onChange} />
                        </div>
                        <div style={{ marginTop: "10px" }}>
                            <button onClick={props.LoginCheck}>Save</button>
                        </div>
                    </div>
                )
            }}
        </LocaleConsumer>
    )
}
