<?php
$headers ="From: talear.com <info@talear.com>\r\nContent-type:text/html;charset=utf-8\r\n";
$to = 'info@talear.com';

if(isset($_POST) && $_POST) {
    $message = 'Новое сообщение ';
    if(isset($_POST['name'])) {
        $message .= ' <br> От --' . $_POST['name'];
    }
    if(isset($_POST['phone'])) {
        $message .= ' <br> Телефон --' . $_POST['phone'];
    }
    if(isset($_POST['city'])) {
        $message .= ' <br> Город --' . $_POST['city'];
    }
    if(isset($_POST['myEmail'])) {
        $message .= ' <br> E-mail --' . $_POST['myEmail'];
    }
    if(isset($_POST['massage'])) {
        $message .= ' <br> Сообщение --' . $_POST['massage'];
    }
    if(isset($_POST['tale'])) {
        $message .= ' <br> Оформлены заказы на :';
        foreach ($_POST['tale'] as $index => $item) {
            $message .= ' <br> ---' . $item;
        }
    }
    if(mail($to,"Письмо из лендинга talear.com ",$message,$headers)) {
        echo 1;
        die;
    }
}
else {
    return false;
}