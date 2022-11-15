const opcionesCriptomoneda=async()=>{
    const url="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=108tsym=USD";
    
    const respuesta=await fetch(url);
    const resultado=await respuesta.json()`;

   
    let selectCripto=document.querySelector("#criptomoneda");
    let opcionesHTML=`<option value="">- Selecciona -</option>`;
    
    resultado.Data.map(opcion=>{
        opcionesHTML+=`<option value="${opcion.CoinInfo.Name}">${opcionesCriptomoneda.CoinInfo.FullName}`;
    });

    selectCripto.innerHTML=opcionesHTML;
}
const cotizarMoneda=()=>{
    const moneda=document.querySelector("#moneda").value;
    const cripto=document.querySelector("#criptomoneda").value;

    if
}