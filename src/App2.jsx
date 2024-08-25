import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'

//import './App.css'

function App2() {

    const [orders, setorder] = useState([]);
    const [Chicken_breast_sliced, setChicken_breast_sliced] = useState();
    const [Beef_sliced, setBeef_sliced] = useState();
    const [Soft_shell_crab, setSoft_shell_crab] = useState();
    const [Chicken_tenderloin, setChicken_tenderloin] = useState();
    const [Pork_mince, setPork_mince] = useState();
    const [wings, setwings] = useState();
    const [Cooked_Prawns, setCookedPrawns] = useState();
    const [Raw_Prawns, setRawPrawns] = useState();
    const [squid, setsquid] = useState();
    const [Basa, setBasa] = useState();
    const [Pork_Neck, setPorkNeck] = useState();
    const [Pork_Tenderloin, setPorkTenderloin] = useState();
    const [Pork_Belly, setPorkBelly] = useState();
    const [Pork_Belly_Boneless, setPorkBellyBoneless] = useState();
    const [Maryland, setMaryland] = useState();
    const [Diced, setDiced] = useState();
    const [Barramundi, setBarramundi] = useState();

    function handleChickenChange(event) {
        setChicken_breast_sliced(event.target.value);
    }
    function handleBeefChange(event) {
        setBeef_sliced(event.target.value);
    }
    function handleSoftshellcrabChange(event) {
        setSoft_shell_crab(event.target.value)
    }
    function handleChickentenderloinChange(event) {
        setChicken_tenderloin(event.target.value)
    }
    function handlePorkminceChange(event) {
        setPork_mince(event.target.value)
    }
    function handlewingsChange(event) {
        setwings(event.target.value)
    }
    function handleCookedPrawnsChange(event) {
        setCookedPrawns(event.target.value)
    }
    function handlRawPrawnsChange(event) {
        setRawPrawns(event.target.value)
    }
    function handlsquidChange(event) {
        setsquid(event.target.value)
    }
    function handlBasaChange(event) {
        setBasa(event.target.value)
    }
    function handlePorkNeckChange(event) {
        setPorkNeck(event.target.value)
    }
    function handlePorkTenderloinChange(event) {
        setPorkTenderloin(event.target.value)
    }
    function handlePorkBellyChange(event) {
        setPorkBelly(event.target.value)
    }
    function handlePorkBellyBonelessChange(event) {
        setPorkBellyBoneless(event.target.value)
    }
    function handlMarylandChange(event) {
        setMaryland(event.target.value)
    }
    function handlDicedChange(event) {
        setDiced(event.target.value)
    }
    function handlBarramundiChange(event) {
        setBarramundi(event.target.value)
    }


    function handleClick() {
        if (orders.length == 0) {
            if (Chicken_breast_sliced > 0) {
                setorder(orders => [...orders, "Chicken breast sliced " + document.getElementById("Chicken_breast_sliced").value + " kg."]);

            }
            if (Beef_sliced > 0) {
                setorder(orders => [...orders, "Beef sliced " + document.getElementById("Beef_sliced").value + " kg."]);
            }
            if (Soft_shell_crab >0) {
                setorder(orders => [...orders, "Soft shell crab 150/200 " + document.getElementById("Soft_shell_crab").value + " kg."]);
            }
            if (Chicken_tenderloin > 0) {
                setorder(orders => [...orders, "Chicken tenderloin " + document.getElementById("Chicken_tenderloin").value + " kg."]);
            }
            if (Pork_mince > 0) {
                setorder(orders => [...orders, "Pork mince " + document.getElementById("Pork_mince").value + " kg."]);
            }
            if (wings > 0) {
                setorder(orders => [...orders, "Chicken mid wings 25'' " + document.getElementById("wings").value + " kg."]);
            }
            if (Cooked_Prawns > 0) {
                setorder(orders => [...orders, "Cooked Prawns 16/20 (700g) " + document.getElementById("Cooked_Prawns").value + " Bags."]);
            }
            if (Raw_Prawns > 0) {
                setorder(orders => [...orders, "Raw Green Prawns cutlet vannamie 26/30 " + document.getElementById("Raw_Prawns").value + " Bags."]);
            }
            if (squid > 0) {
                setorder(orders => [...orders, "Squid tubes U/5 today odes Pacificus 4.25kg NW  " + document.getElementById("squid").value + " Ctn."]);
            }
            if (Basa > 0) {
                setorder(orders => [...orders, "Basa  " + document.getElementById("Basa").value + " Ctn."]);
            }
            if (Pork_Neck > 0) {
                setorder(orders => [...orders, "Sliced Pork Neck  " + document.getElementById("Pork_Neck").value + " Kg."]);
            }
            if (Pork_Tenderloin > 0) {
                setorder(orders => [...orders, "Sliced Pork Tenderloin  " + document.getElementById("Pork_Tenderloin").value + " Kg."]);
            }
            if (Pork_Belly > 0) {
                setorder(orders => [...orders, "Sliced Pork Belly  " + document.getElementById("Pork_Belly").value + " Kg."]);
            }
            if (Pork_Belly_Boneless > 0) {
                setorder(orders => [...orders, "Pork Belly Boneless  " + document.getElementById("Pork_Belly_Boneless").value + " Kg."]);
            }
            if (Maryland > 0) {
                setorder(orders => [...orders, "Chicken Maryland Fillet skin on  " + document.getElementById("Maryland").value + " Kg."]);
            }
            if (Diced > 0) {
                setorder(orders => [...orders, "Diced Beef(4cm)  " + document.getElementById("Diced").value + " Kg."]);
            }
            if (Barramundi > 0) {
                setorder(orders => [...orders, "Whole frozen Barramundi  " + document.getElementById("Barramundi").value + " Box."]);
            }

        }
        
        else {
            console.log( "Already order" );
        }
        
    }

    function handleClearClick() {
        setorder(orders => []);
    }
    
    return (

        <div>
          

            <p> Chicken breast sliced   <input type="number" id="Chicken_breast_sliced" value={Chicken_breast_sliced} onChange={handleChickenChange} ></input>  Kg</p>

            <p> Beef sliced   <input type="number" id="Beef_sliced" value={Beef_sliced} onChange={handleBeefChange}></input>  Kg</p>

            <p> Soft shell crab 150/200   <input type="number" id="Soft_shell_crab" value={Soft_shell_crab} onChange={handleSoftshellcrabChange}></input>  Kg</p>

            <p> Chicken tenderloin   <input type="number" id="Chicken_tenderloin" value={Chicken_tenderloin} onChange={handleChickentenderloinChange}></input>  Kg</p>

            <p> Pork mince   <input type="number" id="Pork_mince" value={Pork_mince} onChange={handlePorkminceChange}></input>  Kg</p>

            <p> Chicken mid wings 25''  <input type="number" id="wings" value={wings} onChange={handlewingsChange}></input>  Kg</p>

            <p> Cooked Prawns 16/20 (700g)  <input type="number" id="Cooked_Prawns" value={Cooked_Prawns} onChange={handleCookedPrawnsChange}></input>  Bag</p>

            <p> Raw Green Prawns cutlet vannamie 26/30   <input type="number" id="Raw_Prawns" value={Raw_Prawns} onChange={handlRawPrawnsChange}></input>  Bag</p>

            <p> Squid tubes U/5 today odes Pacificus 4.25kg NW  <input type="number" id="squid" value={squid} onChange={handlsquidChange}></input>  Ctn</p>

            <p> Basa   <input type="number" id="Basa" value={Basa} onChange={handlBasaChange}></input>  Ctn</p>

            <p> Sliced Pork Neck  <input type="number" id="Pork_Neck" value={Pork_Neck} onChange={handlePorkNeckChange}></input>  Kg</p>

            <p> Sliced Pork Tenderloin   <input type="number" id="Pork_Tenderloin" value={Pork_Tenderloin} onChange={handlePorkTenderloinChange}></input>  Kg</p>

            <p> Sliced Pork Belly  <input type="number" id="Pork_Belly" value={Pork_Belly} onChange={handlePorkBellyChange}></input>  Kg</p>

            <p> Pork Belly Boneless   <input type="number" id="Pork_Belly_Boneless" value={Pork_Belly_Boneless} onChange={handlePorkBellyBonelessChange}></input>  Kg</p>

            <p> Chicken Maryland Fillet skin on   <input type="number" id="Maryland" value={Maryland} onChange={handlMarylandChange}></input>  Kg</p>

            <p> Diced Beef(4cm)   <input type="number" id="Diced" value={Diced} onChange={handlDicedChange} ></input>  Kg</p>

            <p> Whole frozen Barramundi   <input type="number" id="Barramundi" value={Barramundi} onChange={handlBarramundiChange} ></input>  Box</p>

            <button onClick={handleClick}> order </button>
            <button onClick={handleClearClick}> clear </button>
            <br/>
            <br/>
            Hi Thu.<br/>
            We'd like to order tomorrow as below;<br/>
            <br/>
            <ul >
                {orders.map((orders, index) => <li  > {orders} </li>)}
            </ul>
            <br/>
            Best regard,<br/>
            Malee Made in Thailand.<br/>
            <br/>
        </div>

        
        
        
    )
}


export default App2