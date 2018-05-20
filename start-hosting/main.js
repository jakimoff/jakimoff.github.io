
/*---slider--*/
$(function(){
	
	var note = $('#note'),
		ts = new Date(2014, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		ts = (new Date()).getTime() + 1*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}
			
			note.html(message);
		}
	});
	
});


		$(function(){
			$("#slides").slides({
				slide: {
					browserWindow: true
				}
			});
		});




function validateEmail(email) { 
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
$(document).ready(function() {	
	
	$('.s_submit').click(function() {
		filled = 1;
		$(this).parent().children('.sinp').each(function() {
			if(this.value.replace(/^\s+|\s+$/g, '')=='' || this.value=='Ваше имя' || this.value=='Ваше имя' || this.value=='Ваш телефон') {$(this).effect('highlight');filled=0;}
		});
		var q=$(this).parent().children('.email');
		if(!validateEmail(q.val())&&(q.val()!='')) {q.effect('highlight');filled=0;}
		if(filled==1) {
		q=$(this).parent().children('.fhid').val();		 
		$(this).parent().submit();
		$('#dialogform').dialog('close');
		$('#dialogform2').dialog('close');
		}
	});
	$('#dialogform').dialog({autoOpen: false,
	title:"Заказ",
    height: 300,
    width: 400,
    modal: true,
	buttons:{},
	resizable:false
	});
	$('#dialogform2').dialog({autoOpen: false,
	title:"Заказ звонка",
    height: 300,
    width: 400,
    modal: true,
	buttons:{},
	resizable:false
	});
	$('.formshow').click(function(){
		$('#dialogform').dialog('open');
		$('#dialogform .nameinp').blur();
	});
	$('.formshow2').click(function(){
		$('#dialogform2').dialog('open');
		$('#dialogform2 .nameinp2').blur();
	});
	updateDate();
	setInterval(updateDate, 1000);
});
function setSender(a) {
	$('#senderid').val(a);
}




