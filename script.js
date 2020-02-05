//Moments clock//
(function () {
  
  var NowDate = new Date();
  var eDisplayDate = document.getElementById('displayJsDate');
  eDisplayDate.innerHTML = NowDate;
})();

//buttons//
$(".Save").on("click", function () {
  var btn = $(this).val()
  var userInput = $(btn).val()
  localStorage.setItem(btn, userInput)

})

//local storage loop//
var myList = Object.keys(localStorage)
for (let i = 0; i < myList.length; i++) {
  const save = localStorage.getItem(myList[i])
  $(myList[i]).val(save)
}


