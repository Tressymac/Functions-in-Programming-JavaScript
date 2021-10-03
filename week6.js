    
     function addFurniture (totalCost, callback) {
             let amount = prompt ("Enter the total cost of the funiture you are buying.");
             amount = parseFloat(amount);
             if (amount < 500)
                 amount -= amount *0.10;

             // Get a handle for the paint paragraph


                         let funitureArea = document.querySelector(".furniture");
                         funitureArea.innerHTML = `Furniture: $${amount.toFixed(2)}`;
                         callback(totalCost + amount);
                         return (totalCost + amount); 
                 }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                            function addPaintAndSupplies(totalCost, callback) {
                                    let cost = prompt("Enter the cost for the paint and supplies.");
                                    cost = parseFloat(cost);
                                    if (cost > 100)
                                        cost *= 1.1;

                                    // Get a handle for the paint paragraph

                                                let paintArea = document.querySelector(".paint");
                                                paintArea.innerHTML = `Paint: $${cost.toFixed(2)}`;
                                                callback(totalCost + cost);
                                                return (totalCost + cost);
                                                        
                                        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                                    function floorCoverings(totalCost, callback) {
                                                        let price = prompt("Enter the cost for the floor coverings.");
                                                        price = parseFloat(price);
                                                        if (price < 500)
                                                            price -= price *0.15;

                                                        // Get a handle for the paint paragraph

                                                                    let floorArea = document.querySelector(".floorCoverings");
                                                                    floorArea.innerHTML = `Floor Covering: $${price.toFixed(2)}`;
                                                                    callback(totalCost + price);
                                                                    return (totalCost + price);
                                                                            
                                                            }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 const updateTotals = (final) => {
 // Get a handle for the furniture paragraph
 let totalsArea = document.querySelector(".totalCost");
 totalsArea.innerHTML = `Your total amount is going to be $${final.toFixed(2)}`;
  }


                let totalCost = 0;
                totalCost = addPaintAndSupplies(totalCost, updateTotals);
                totalCost = addFurniture(totalCost, updateTotals);
                totalCost = floorCoverings(totalCost, updateTotals);
                console.log(totalCost)




