<?php 
if(isset($_POST['email'])){
    $to = "it0631@uom.edu.gr"; // this is your Email address
    $from = $_POST['email']; // this is the senders Email address
    $name = $_POST['name'];
    $subject =$_POST['subject'];
    $message = $_POST['message'];

	$headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="css/bootstrap-theme.min.css">
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/theme.css">
<title>Επικοινωνία</title>
</head>

<body>

<!-- header & navigation -->
<header>
    	<div class="nav navbar-default navbar-static-top">
        	<div class="container" style="text-align:center;">
            <div style="margin-top:15px;">
                	<a class="" href="index.html"><img src="img/storgh-logo.png"  alt="storgi-logo"></a>
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mainNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
              </div>
                <div class="collapse navbar-collapse" id="mainNavbar">
                	<ul class="nav navbar-nav">
                	  <li><a href="index.html">ΑΡΧΙΚΗ</a></li>
                	  <li><a href="about.html">ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ</a></li>
                        <li><a href="events.html">ΕΚΔΗΛΩΣΕΙΣ</a></li>
                        <li><a href="donations.html">ΔΩΡΕΕΣ</a></li>
                        <li  class="active"><a href="contact.html">ΕΠΙΚΟΙΝΩΝΙΑ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <br><br>
    
    <!-- main section -->
    <section>
        <div class="container">
        	<!-- Google Maps -->
        	<div class="row">
            	<div class="col-sm-12">
           			<div id="map"></div>
                </div>
            </div>
            
            <!-- Contact Form -->
            <div class="row">
            	<div class="col-sm-12 col-md-6 form">
                	<div class="formHeading"><h3 class="h3Red h3Form">ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ</h3></div><br>
                	<form id="contactForm" action="contact.php" method="post" onsubmit="return validateForm()" novalidate>
                    	<div class="form-group">
                        	<label for="nameInput">Όνομα*</label>
                            <input type="text" class="form-control" id="nameInput" name="name" placeholder="Όνομα">
                            <span id="nameError"></span>
                        </div>
                    	<div class="form-group">
                        	<label for="emailInput">Διεύθυνση Email*</label>
                            <input type="email" class="form-control" id="emailInput" name="email" placeholder="Email">
                            <span id="emailError"></span>
                        </div>
                        <div class="form-group">
                        	<label for="subjectInput">Θέμα*</label>
                            <input type="text" class="form-control" id="subjectInput" name="subject" placeholder="Θέμα">
                            <span id="subjectError"></span>
                        </div>
                        <div class="form-group">
                        	<label for="messageInput">Μήνυμα*</label>
                            <textarea class="form-control" minlength="10" rows="5" placeholder="Αφήστε το μήνυμά σας εδώ..." name="message" id="messageInput"></textarea>
                            <span id="messageError"></span>
                        </div>
                        <button type="submit" name="submit" class="btn btn-default pull-right">Αποστολή</button>
                    </form>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 contact">
                	<h3 class="h3Red">ΕΠΙΚΟΙΝΩΝΙΑ</h3><br><br>
                    <div class="row">
                    	<div class="col-sm-6">
                        	<h4 class="mainAdd">Τρίκαλα(κεντρικά)</h4>
                            <p>Ασκληπειού 35</p>
                            <p>42100</p>
                            <p><strong>ΤΗΛ: </strong> 24310 55889</p>
                            <p><strong>email: </strong> storgiTrikala@gmail.com</p>
                        </div>
                        <div class="col-sm-6">
                        	<h4 class="mainAdd">Καρδίτσα</h4>
                            <p>Πηνειού 22</p>
                            <p>43131</p>
                            <p><strong>ΤΗΛ: </strong> 24410 66889</p>
                            <p><strong>email: </strong> storgiKarditsa@gmail.com</p>
                        </div>
                    </div>
                     
                </div>
            </div>
        </div>
    </section>
    
    
    <!-- Footer -->
    <footer>
    	<div class="container">
        	<div class="row">
            <div class="col-lg-6">
            	&copy; All Rights Reserved - Storgi - Tsalas Konstantinos 2017 
            </div>
             <div class="col-lg-6">
             	<ul class="social-btns">
                    <li><a href="https://www.facebook.com/" target="_blank" data-placement="top" title="Facebook"><i class="fa fa-facebook fa-2x"></i></a></li>
                    <li><a href="https://twitter.com/" target="_blank" data-placement="top" title="Twitter"><i class="fa fa-twitter fa-2x"></i></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank" data-placement="top" title="Linkedin"><i class="fa fa-linkedin fa-2x"></i></a></li>
                    <li><a href="https://gr.pinterest.com/" target="_blank" data-placement="top" title="Pinterest"><i class="fa fa-pinterest fa-2x"></i></a></li>
                    <li><a href="https://plus.google.com/collections/featured?hl=el" target="_blank" data-placement="top" title="Google plus"><i class="fa fa-google-plus fa-2x"></i></a></li>
                </ul>
             </div>
            </div>
        </div>
    </footer>
  <script src="js/jquery-3.1.1.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script>
		function myMap() {
			var startLoc = {lat:39.549349, lng: 21.764898};
			var map = new google.maps.Map(document.getElementById('map'),{
				zoom:14,
				center:startLoc
				});
			var marker = new google.maps.Marker ({
				position:startLoc,
				map: map
				});
		}
  </script>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzeSfm4Kab8nNJdSEdTEQqDsRemczF5wg&callback=myMap"></script>
  <script src="js/validation.js"></script>
  <script src="js/responsive.js"></script>


</body>
</html>
