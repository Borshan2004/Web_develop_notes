document.getElementById('btn_comments').addEventListener('click',function(){
    const input_text_in_area = document.getElementById('commnettext_area');
    const input_text_in_area_v =input_text_in_area.value;

    const paragraph = document.createElement('p');
    paragraph.classList.add('comment');//doing the add now all the class of comments work here
    paragraph.innerText=input_text_in_area_v;
    
    
    document.getElementById('add_here').appendChild(paragraph);

    input_text_in_area.value='';
})