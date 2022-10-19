//import logo from './logo.svg';
import './App.css';

import { useState,useEffet } from 'react';

import {ethers} from 'ethers';

import Lock from './artifacts/contracts/Lock.sol/Lock.json'; //Grace à ABI, on pourra interagir avec le contrat intelligent

const lockAdress="0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

//ABI permet d'interagir avec le front end avec le smart contract

function App() {


  const [lockedAmount,welcome_msg,setMessage]=useState();


  useEffet(()=>{
    retrieveMessage();  //Recuperation du Message 
 },[]);

  //Function that will permit user to connect toward UI
  async function  requestAccount()
  {
    await window.ethereum.request({method:"eth_requestAccounts"})

  }

  //fontion permettant de recuperer le message d'Accueil

  async function retrieveMessage()
  {

    if(typeof window.ethereum !=="undefined") //S'assurer que Metamask est bien connecté au site front-end
    {

      //Creation d'un nouveau fournisseur (provider)===> Ici  web3 Provider
      const provider=new ethers.providers.Web3Provider(window.ethereum);


      /** Cretaion d'une nouvelle instance du contrat 
       * On aura donc besoin de l'adresse où le contrat est deplyé, de l'ABI du contrat et 2
       * du provider
       */

      const contrat = new ethers.Contract(lockAdress,Lock.abi,provider);
      
      /** Utilisation de cette variable de contrat pour interagir avec la fonction */

      try
      {
        const data= await contrat.getMessage();  //Appel de la fonction de récupération du message d'Accueil

        setMessage(data); //Modification du Message 
      }

      catch(err)
      {
             console.log(err);
      }
    }
  }

/** Fonction de Formulaire qui permetra de renseigner le Message d'accueil */

async function setWelcomeMessage()
{
  if(!lockedAmount) return ;// Sortir de la fonction s'il n'y a pas de Message

  if(typeof window.ethereum!=="undefined")
  {
    await requestAccount();  //Si le user est connecté à Metamask, on attend et  lui permet d'utiliser son compte

    /**Creons un new provider pour pouvoir signer la transaction */
    const provider=new ethers.providers.Web3Provider(window.ethereum);
    const signer=provider.getSigner(); //Le tiers qui va permettre de signe les transactions

    //Recupération du contrat
    const contrat=new ethers.Contract(lockAdress,Lock.api,signer);

    const transaction=await contrat.setMessage(lockedAmount);  //Changement du Message 

      setMessage('');  // Mettre le state à vide

      await transaction.wait() //Attrendre que la transaction se déroule bien

      retrieveMessage();
  }

}

  return (
    <div className="App">
     <p>{lockedAmount}</p>

     <input onChange={e=>setMessage(e.target.value)} placeholder="Set message" />

     <button onClick={setWelcomeMessage}>Change Message</button>
    </div>
  );
}

export default App;
