$(document).ready(function(){
  $("a.new_window").attr("target", "_blank");
 });
    function ValidMail() {
        var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        var myMail = document.getElementById('e-mail').value;
        var valid = re.test(myMail);
        if (valid) output = 'CONSULTATION IS FREE';
        else output = 'E-mail is incorrect!';
        document.getElementById('message_form').innerHTML = output;
        return valid;
    }
    function ValidPhone() {
        var re = /^[+]+[\d]+[\d\(\)\ -]+[\d]+$/;
        var myPhone = document.getElementById('phone').value;
        var valid = re.test(myPhone);
        if (valid) output = 'CONSULTATION IS FREE';
        else output = 'Phone number is incorrect, please type full phone number. Example: "+1*****"';
        document.getElementById('message_form').innerHTML = output;
        return valid;
    }
      $(function(){
      $("#faded").faded({
         speed: 500,
         crossfade: true,
         autoplay: 10000,
         autopagination:false
      });

      $('#domain-form').jqTransform({imgPath:'jqtransformplugin/img/'});
   });