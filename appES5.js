function Course(title,instructor,ımage){

    this.title=title;
    this.instructor=instructor;
    this.ımage=ımage;
}
function UI(){

}
UI.prototype.addCourseToList=function(course){
    const list = document.getElementById("course-list");

    var html=`
    <tr>
    <td><img src="img/aa.jpg" ${course.ımage}"/></td>
    <td>${course.title}</td>
    <td>${course.instructor}</td>
    <td><a href="#" class= "btn-btn-danger btn-sm">Delete</a></td>
  
    </tr>`;
    
    list.innerHTML+=html;
    
}
UI.prototype.clearControls=function(){

    const title = document.getElementById("title").value="";
    const instructor = document.getElementById("instructor").value="";
    const ımage =document.getElementById("ımage").value="";

}
UI.prototype.deleteCourse=function(element){
    if(element.classList.contains("delete")){
        element.parentElement.parentElement.remove();

    }
}
UI.prototype.showAlert=function(message,className){


 var alert = `
 <div class="alert alert-${className}">
    ${message}

</div>
`;


const row= document.querySelector('.row');
row.insertAdjacentHTML('afterBegin',alert);

setTimeout(()=>{
    document.querySelector("alert").remove();

},3000);
}

document.getElementById("new-course").addEventListener("submit",
function(e){

    const title = document.getElementById("title").value;
    const instructor = document.getElementById("instructor").value;
    const ımage =document.getElementById("ımage").value;
    

    const course=new Course(title,instructor,ımage);

    const uı=new UI();

    if(title===''|| instructor==='' || ımage===''){
        uı.showAlert("Lütfen formu doldur","warning");

    }else{
        uı.addCourseToList(course);
        uı.clearControls();
        uı.showAlert("Kursunuz başarıyla eklendi","success");

    }

    e.preventDefault();


});
document.getElementById("course-list").addEventListener("click",function(e){

    const uı=new UI();
    uı.deleteCourse(e.target);
    uı.showAlert("Kursunuz kaldırıldı","danger");
    

    
});