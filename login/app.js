import {app} from `./firebase.js`
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

const auth = getAuth(app);

const btnCrearCuenta=document.querySelector("#btnCrearCuenta");

btnCrearCuenta.addEventListener('click', async(e)=>{
    e.preventDefault();
    const email=document.querySelector("#crearEmail").value;
    const password=document.querySelector("#crearPassword").value;
    console.log(email,password);

    const respuesta=await createUserWithEmailAndPassword(auth, email, password)
    console.log(respuesta);
})
