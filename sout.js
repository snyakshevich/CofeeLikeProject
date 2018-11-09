function changePicture() {
    var elem=document.getElementById('IPict');
    elem.src='img/polza2jpg';
}



    var formElement=document.forms['question'];
    formElement.onsubmit=validateForm;

    function validateForm() {
        var formElement=document.forms['question'];           

        var nameElement=formElement.elements['your_name'];
        var articleElement=formElement.elements['article'];

        var nameValue=nameElement.value;
        var articleValue=articleElement.value;

        if ( nameValue.length>15 ) {
            alert('Введите пожалуйста имя не длиннее 15 символов!');
            nameElement.focus();
            return false;
        }

               if ( articleValue.length <1 ) {
            alert('Введите, пожалуйста, ваш вопрос!');
            articleElement.focus();
            return false;
        }

         return true;
    }



function changePicture() {
    var elem=document.getElementById('IPict');
    elem.src='img/polza2.jpg';
}



