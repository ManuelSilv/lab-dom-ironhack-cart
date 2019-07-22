window.onload = function(){
  var calculatePriceButton = document.getElementsByClassName('calc-prices-button')[0];
  var createItemButton = document.getElementsByClassName('new-item-create')[0];
  

  calculatePriceButton.addEventListener("click", calculateSubtotals);
  addEventListenersToDeleteButtons("click", deleteRowFunction);
  //debugger
  createItemButton.addEventListener("click", createNewProduct);

  function calculateSubtotals() {
    let productRows = document.getElementsByClassName("product-wrap")
    for(let i = 0; i < productRows.length; i++) {
        calcSubTotal(productRows[i])
    }
    var allSubTotalsElements = document.getElementsByClassName("sub-total")
    
    let grandTotal = 0
    for (let i = 0; i < allSubTotalsElements.length; i++){
        grandTotal += parseInt(allSubTotalsElements[i].innerHTML)
    }
    document.getElementsByClassName("total-price")[0].innerHTML = grandTotal
  }

  function addEventListenersToDeleteButtons(){
    var deleteButton = document.getElementsByClassName('delete-button')[0];
    //debugger;
    let deleteButtonsArray = document.getElementsByClassName("delete-button")
    //deleteButton.addEventListener("click", deleteSubtotal);
    for(let i = 0; i < deleteButtonsArray.length; i++) {
      if(deleteButtonsArray.length > 0 ){
        //deleteButtonsArray[i].addEventListener("click", (event)=>{deleteRowFunction(event)});
        deleteButtonsArray[i].addEventListener("click", deleteRowFunction);
      }
    }
    debugger;
  }   
  function deleteRowFunction(event){
    //debugger;
    // let element = document.getElementsByClassName('product-wrap')[0];
    let element = this.parentNode.parentNode

    // let one = this
    // let two = event
    debugger;
    element.parentNode.removeChild(element);
    
   }

  function calcSubTotal(productRow) {
    var quantity = productRow.getElementsByClassName("howMany")[0].value;
    var price = productRow.getElementsByClassName("price")[0].innerHTML;
    productRow.getElementsByClassName("sub-total")[0].innerHTML = parseInt(quantity) * parseInt(price)
  }

  function createNewProduct(){
    let createWrap = document.getElementsByClassName('product-wrap')[0];
    let newProductWrap = createWrap.cloneNode(true);
    let productPrice = document.getElementById('price');
    let productName = document.getElementById('')
    createWrap.parentNode.appendChild(newProductWrap);
     // document.getElementsByClass('container').appendChild('product-wrap');
    
     //deleteRowFunction(event)
     addEventListenersToDeleteButtons()
 debugger;
   }
}



  




  

  


  
