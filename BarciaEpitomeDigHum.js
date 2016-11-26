
function myAuthors() {
			var n = document.querySelectorAll(".authorName").length;
			var x = document.getElementsByClassName("authorName");
			for (i = 0; i<n; i++) {
				x[i].style.backgroundColor = "red";
			}
			for (i = 0; i<n; i++) {
				x[i].style.color = "white";
			}
		}
		
		function myTitles() {
			var t = document.querySelectorAll(".bookTitle").length;
			var x = document.getElementsByClassName("bookTitle");
			for (i = 0; i<t; i++) {
				x[i].style.backgroundColor = "blue";
			}
			for (i=0; i<t;i++) {
				x[i].style.color = "white";
			}
		}
		
		function myHrefs() {
			var h = document.querySelectorAll(".link").length;
			var x = document.getElementsByClassName("link");
			for (i = 0; i<h; i++) {
				x[i].style.textDecoration = "overline";
			}

		}
		function reload() {
			location.reload();
		}
		
		function getTitles () {
			var t = document.querySelectorAll(".bookTitle").length;
			var titles = [];
			for (i=0; i<t; i++) {
				titles[i] = document.getElementsByClassName("bookTitle")[i].innerHTML;
			}
			document.getElementById("demoT").innerHTML = "<strong>Title list:</strong> " + titles.join(" | ");
		}
		
		function getAuthors () {
			var a = document.querySelectorAll(".authorName").length;
			var authors = [];
			for (i=0; i<a; i++) {
				authors[i] = document.getElementsByClassName("authorName")[i].innerHTML;
			}
			document.getElementById("demoA").innerHTML = "<strong>Author list:</strong> " + authors.join(" | ");
		}