// JavaScript Document
 $(document).ready(function(){
	'use strict';
	var name = document.getElementById("nameInput");
	if (document.getElementById("emailInput")){
			var email= document.getElementById("emailInput");
			document.getElementById("emailInput").classList.remove("error");
				email.addEventListener("focusout",function(event){
				document.getElementById("emailInput").classList.remove("error");
				var text = email.value;
				var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if( text=== ""){
					document.getElementById("emailError").innerHTML="Παρακαλώ εισάγετε μια διεύθυνση ηλεκτρονικού ταχυδρομείου";
					email.className += " error";}
				else if (reg.test(text) === false){
					document.getElementById("emailError").innerHTML="Παρακαλώ εισάγετε μια έγκυρη διεύθυνση ηλεκτρονικού ταχυδρομείου";
					email.className += " error";}
				else {
					document.getElementById("emailError").innerHTML="";}
			
				});	
			}
	if (document.getElementById("subjectInput")){
			var subject=document.getElementById("subjectInput");
			document.getElementById("subjectInput").classList.remove("error");
			subject.addEventListener("focusout",function(event){
				document.getElementById("subjectInput").classList.remove("error");
				var text = subject.value;
				if (text === ""){
					document.getElementById("subjectError").innerHTML="Παρακαλώ εισάγετε ένα θέμα";
					subject.className += " error";}
				else if (text.length < 2){
					document.getElementById("subjectError").innerHTML="Παρακαλώ το θέμα πρέπει να αποτελείται απο τουλάχιστον 2 χαρακτήρες";
					subject.className += " error";}
				else {
					document.getElementById("subjectError").innerHTML="";}
				});
		}
	
	var message= document.getElementById("messageInput");
	document.getElementById("nameInput").classList.remove("error");
	document.getElementById("messageInput").classList.remove("error");
	
	name.addEventListener("focusout",function(event){
		document.getElementById("nameInput").classList.remove("error");
		var text = name.value;
		if (text === ""){
			document.getElementById("nameError").innerHTML="Παρακαλώ εισάγετε ένα όνομα";
			name.className += " error";} 
		else if(text.length < 2){
			document.getElementById("nameError").innerHTML="Παρακαλώ το όνομα πρέπει να αποτελείται απο τουλάχιστον 2 χαρακτήρες";
			name.className += " error";}
		else {
			document.getElementById("nameError").innerHTML="";}
		});
	
	message.addEventListener("focusout",function(event){
		document.getElementById("messageInput").classList.remove("error");
		var text = message.value;
		if (text===""){
			document.getElementById("messageError").innerHTML="Παρακαλώ εισάγετε ένα μήνυμα";
			message.className += " error";}
		else if (text.length < 5){
			document.getElementById("messageError").innerHTML="Παρακαλώ το μήνυμα πρέπει να αποτελείται απο τουλάχιστον 5 χαρακτήρες";
			message.className += " error";}
		else {
			document.getElementById("messageError").innerHTML="";}
	});
	
	//var form = document.getElementsByTagName("form")[0];
	
}); 


function validateForm(){
		'use strict';
		document.getElementById("nameError").innerHTML="";
		if (document.getElementById("emailInput")){
			document.getElementById("emailError").innerHTML="";
			document.getElementById("emailInput").classList.remove("error");
			var email= document.getElementById("emailInput");
			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			if (email.value === "" || reg.test(email.value) === false){
					if (email.value === ""){
						document.getElementById("emailError").innerHTML="Παρακαλώ εισάγετε μια διεύθυνση ηλεκτρονικού ταχυδρομείου";
						email.className += " error";
						return false;
						}
					else {
						document.getElementById("emailError").innerHTML="Παρακαλώ εισάγετε μια έγκυρη διεύθυνση ηλεκτρονικού ταχυδρομείου";
						email.className += " error";
						return false;
						}
			} }
			
		if (document.getElementById("subjectInput")){
			document.getElementById("subjectError").innerHTML="";
			document.getElementById("subjectInput").classList.remove("error");
			var subject=document.getElementById("subjectInput");
			if (subject.value === "" || (subject.value.length >0 && subject.value.length<2)){
				if (subject.value === ""){
					document.getElementById("subjectError").innerHTML="Παρακαλώ εισάγετε ένα θέμα";
					subject.className += " error";
					return false;
					}
				else {
					document.getElementById("subjectError").innerHTML="Παρακαλώ το θέμα πρέπει να αποτελείται απο τουλάχιστον 2 χαρακτήρες";
					subject.className += " error";
					return false;
					}
			}}
		
		
		document.getElementById("messageError").innerHTML="";
		document.getElementById("nameInput").classList.remove("error");
		document.getElementById("messageInput").classList.remove("error");
		
		var name = document.getElementById("nameInput");
		if ((name.value === "") || (name.value.length < 2 && name.value.length >0)) {
			if (name.value === ""){
				document.getElementById("nameError").innerHTML="Παρακαλώ εισάγετε ένα όνομα";
				name.className += " error";
				return false;}
			else{
				document.getElementById("nameError").innerHTML="Παρακαλώ το όνομα πρέπει να αποτελείται απο τουλάχιστον 2 χαρακτήρες";
				name.className += " error";
				return false;}
			}
		
		
		var message= document.getElementById("messageInput");
		if (message.value === "" || (message.value.length >0 && message.value.length <5)){
			if (message.value === ""){
				document.getElementById("messageError").innerHTML="Παρακαλώ εισάγετε ένα μήνυμα";
				message.className += " error";
				return false;
				}
			else {
				document.getElementById("messageError").innerHTML="Παρακαλώ το μήνυμα πρέπει να αποτελείται απο τουλάχιστον 20 χαρακτήρες";
				message.className += " error";
				return false;
				}
			}
		return true;
		} 
		
function submitComment(){
	'use strict';
	if (validateForm()){
		var name = document.getElementById("nameInput");
		var message= document.getElementById("messageInput");
		var div =document.createElement('div');
		div.innerHTML = '<h4>' + name.value + '</h4><p class="text">' + message.value + '</p>';
		document.getElementById('comments').appendChild(div);
		return false;
		}
	else {
		return false;
		}
	}