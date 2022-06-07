// Declaration section
const carwashBtn = document.getElementById("carwash-btn")
const mowlawnBtn = document.getElementById("mowlawn-btn")
const pullweedsBtn = document.getElementById("pullweeds-btn")
const sendinvoiceBtn = document.getElementById("sendinvoice-btn")
const tasknotesElm = document.getElementById("tasknotes-elm")
const totalamountElm = document.getElementById("totalamount-elm")
const tablebodyElm = document.getElementById("tablebody-elm")
const carwashArr = ["Car Wash", 10]
const mowlawnArr = ["Mow Lawn", 20]
const pullweedsArr = ["Pull Weeds",30]

let actionOrderedArr = []
let totalCost = 0

// Establish button labels
carwashBtn.innerText = carwashArr[0] + " $" + carwashArr[1]
mowlawnBtn.innerText = mowlawnArr[0] + " $" + mowlawnArr[1]
pullweedsBtn.innerText = pullweedsArr[0] + " $" + pullweedsArr[1]

// Provide some nonsensical text to conform to the solo project's demands
tasknotesElm.innerHTML +=  `<br><br>This portion of text does not give any  information. Really. It's just a bunch of words put together to form a valid sentence.`;

// eventlisteners for the buy buttons
carwashBtn.addEventListener("click", function(){
    if (!actionOrderedArr.includes(carwashArr)) {
        actionOrderedArr.push(carwashArr)
        renderTableBody()
    }
})

mowlawnBtn.addEventListener("click", function(){
    if (!actionOrderedArr.includes(mowlawnArr)) {
        actionOrderedArr.push(mowlawnArr)
        renderTableBody()
    }
})

pullweedsBtn.addEventListener("click", function(){
    if (!actionOrderedArr.includes(pullweedsArr)) {
        actionOrderedArr.push(pullweedsArr)
        renderTableBody()
    }
})

// Attach a delegated event handler - event bubbling is the name of the game
tablebodyElm.addEventListener('click', function (event) {
    if (event.target.classList.contains('deletebtn')) {

        let btnName = event.target.id
        let btnIndex = btnName.charAt((btnName.length - 1))
        subArray = actionOrderedArr.splice(btnIndex, 1)
        renderTableBody()
    }
  });

// 
function renderTableBody() {
    let counter = 0
    let htmlEntry = ""

    tablebodyElm.innerHTML = htmlEntry
    totalCost = 0

    for (counter = 0; counter < actionOrderedArr.length; counter++){

        htmlEntry = `
         <tr id="trow-${actionOrderedArr.length}">
             <td class="taskcolumn">${actionOrderedArr[counter][0]}</td>
             <td class="removecolumn">
                 <button type="button" class="deletebtn" id="remove-${counter}">Remove</button>
             </td>
             <td class="costcolumn">${actionOrderedArr[counter][1]}</td>
         </tr>
        `
        tablebodyElm.innerHTML += htmlEntry
        totalCost += actionOrderedArr[counter][1]
        }

    renderSumTotal(totalCost)
    }


sendinvoiceBtn.addEventListener("click", function() {
    cleanupTheMess()
        }
    )

function renderSumTotal(amount) {
        totalamountElm.innerText = "$"+amount
    }

function cleanupTheMess() {
    actionOrderedArr = []
    tablebodyElm.innerHTML = ""
    totalCost = 0
    renderSumTotal(totalCost)
    console.clear()

}