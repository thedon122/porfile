<?php
if(isset($_POST) && !empty($_POST)){
	$full_name = (isset($_POST['full_name']))?$_POST['full_name']:'';
	$first_name = (isset($_POST['first_name']))?$_POST['first_name']:'';
	$middle_name = (isset($_POST['middle_name']))?$_POST['middle_name']:'';
	$last_name = (isset($_POST['last_name']))?$_POST['last_name']:'';
	$email = (isset($_POST['email']))?$_POST['email']:'';
	$subject = (isset($_POST['subject']))?$_POST['subject']:'';
	$message = (isset($_POST['message']))?$_POST['message']:'';
	$contact_no = (isset($_POST['contact_no']))?$_POST['contact_no']:'';
	$guest_no = (isset($_POST['guest_no']))?$_POST['guest_no']:'';
	$event_name = (isset($_POST['event_name']))?$_POST['event_name']:'';
	
	if($full_name == ''){
		$full_name =  $first_name.' '.$middle_name.' '.$last_name;
	}
	
	$sendMessage = $mailSubject = '';
	if($_POST['form_type'] == 'contact'){
		$mailSubject = 'Contact Details';
		$sendMessage = "<p>Hello,</p><p>".$full_name." has sent a message having </p><p><b>Phone No:</b> ".$contact_no."</p><p><b>Email id:</b> ".$email."</p><p><b>Query is:</b> ".$message."</p>";
	}elseif($_POST['form_type'] == 'inquiry'){
		$mailSubject = 'Inquiry Details';
		$sendMessage = "<p>Hello,</p><p>".$full_name." has sent a message having </p><p><b>Email id:</b> ".$email."</p><p><b>Guests :</b> ".$guest_no."</p><p><b>Event :</b> ".$event_name."</p>";
	}
	
	if($sendMessage != ''){
		$fromEmail = 'support@myporto.com';
		$toEmail = 'webstrot@gmail.com';
		
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= "From: <$fromEmail>" . "\r\n";

		if(mail($toEmail , $mailSubject , $sendMessage , $headers )){
			echo 1;
		}else{
			echo 0;
		}
	}else{
		echo 0;
	}
}else{
	echo 0;
}

?>