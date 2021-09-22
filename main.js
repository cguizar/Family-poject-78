
var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update(){
    
      var  numbers_of_family_member_in_array = 3
      if(i > numbers_of_family_member_in_array)
        {
            i = 0; 
        }
       
       
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = ["https://www.how-to-draw-funny-cartoons.com/images/cartoon-dad-005.jpg",
     "https://thumbs.dreamstime.com/z/mom-icon-cartoon-style-mom-icon-cartoon-style-white-background-123080089.jpg",
     "https://previews.123rf.com/images/yupiramos/yupiramos1905/yupiramos190505227/122760736-little-girl-avatar-character-vector-illustration-design.jpg" ,
    "https://image.shutterstock.com/image-vector/cute-little-girl-spring-600w-337904864.jpg"];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = ["Carlos","Gabriela","Ana","Lucia"] ;
    

    document.getElementById("family_member_image").src = updatedImage[i];
    document.getElementById("family_member_name").innerHTML = updatedName[i];
    i++;
}




