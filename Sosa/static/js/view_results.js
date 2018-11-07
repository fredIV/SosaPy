window.onload = fillFilterOptions;

//This function filters the results of the table based on what is selected in the dropdown.
function filterResults() {
var selectedValue = document.getElementById("myDropdown").value;

  var filter, table, tr, td, i;
  filter = selectedValue.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  //if the user selects "all" or "all results", display everything
  if(filter == "ALL RESULTS"){
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			tr[i].style.display = "";
		}
	}
  }else{
  //else, display only which are the same as the selected value
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
		if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
		} else {
			tr[i].style.display = "none";
		}
		}
	}
  }

}

function fillFilterOptions(){
	var dropdownF = document.getElementById("myDropdown");
	var tbl = document.getElementById("myTable");
	var all = document.createElement('option');
	all.text = all.value = "All Results";
	dropdownF.add(all, 0);
		if (tbl != null) {
		//rows
			for (var i = 1; i < tbl.rows.length; i++) {

				var option = document.createElement('option');
				option.text = option.value = tbl.rows[i].cells[0].innerHTML;

				var duplicate = false;
				for (var j = 1; j < i; j++) {
				//checks if the current cell's text is the same as any cells before it. If it's a duplicate, don't put it/it as new dropdown option.
					if(option.text == tbl.rows[j].cells[0].innerHTML){
						duplicate = true;
						// alert(option.text + " TO " + tbl.rows[j].cells[0].innerHTML);

					}
				}
				if(!duplicate){
					dropdownF.add(option, tbl.rows.length);
				}


				//setting the cells onclick function
				tbl.rows[i].cells[0].onclick = function(){
					// TODO add functionality here
				}

			}

		}
}


// When the user clicks on the button, toggle between hiding and showing the dropdown content
function hiddenToggle() {

  dropdownF.classList.toggle("show");
}


//bring up new table or new page with results to this experiment and this ID, send GET----- currently, it just displays what was clicked.
function getval(cel) {

			if(cel != null){

				alert(cel.innerHTML + "");
			}
        }