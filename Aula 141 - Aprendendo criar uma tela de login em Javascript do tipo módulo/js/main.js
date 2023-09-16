import { login } from "./login.js";

const callback_ok = () => {

}

const callback_notok = () => {
    alert("Not ok")
}

login.login(callback_ok, callback_notok)