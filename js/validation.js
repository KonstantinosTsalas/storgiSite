// JavaScript Document
 $(document).ready(function(){
	'use strict';
	var name = document.getElementById("nameInput");
	var email= document.getElementById("emailInput");
	var subject=document.getElementById("subjectInput");
	var message= document.getElementById("messageInput");
	
	document.getElementById("nameInput").classList.remove("error");
	document.getElementById("emailInput").classList.remove("error");
	document.getElementById("subjectInput").classList.remove("error");
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
	
	message.addEventListener("focusout",function(event){
		document.getElementById("messageInput").classList.remove("error");
		var text = message.value;
		if (text===""){
			document.getElementById("messageError").innerHTML="Παρακαλώ εισάγετε ένα μήνυμα";
			message.className += " error";}
		else if (text.length < 20){
			document.getElementById("messageError").innerHTML="Παρακαλώ το μήνυμα πρέπει να αποτελείται απο τουλάχιστον 20 χαρακτήρες";
			message.className += " error";}
		else {
			document.getElementById("messageError").innerHTML="";}
	});
	
	//var form = document.getElementsByTagName("form")[0];
	
}); 


function validateForm(){
		'use strict';
		document.getElementById("nameError").innerHTML="";
		document.getElementById("emailError").innerHTML="";
		document.getElementById("subjectError").innerHTML="";
		document.getElementById("messageError").innerHTML="";
		
		document.getElementById("nameInput").classList.remove("error");
		document.getElementById("emailInput").classList.remove("error");
		document.getElementById("subjectInput").classList.remove("error");
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
				} 
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
			}
		var message= document.getElementById("messageInput");
		if (message.value === "" || (message.value.length >0 && message.value.length <20)){
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