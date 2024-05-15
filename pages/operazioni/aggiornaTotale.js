function aggiornaTotale(form){
    let importo = form.importo.value
    let conto = localStorage.getItem('contoSelezionato') //prendi conto attualmente selezionato
    let saldo = localStorage.getItem(conto) //prendi saldo presente sul conto
    if (saldo-importo == 0){
        alert("Operazione non possibile. Saldo insufficiente!")
    }else{
        alert("Operazione andata a buon fine!")
        saldo -= importo
    }
    
}