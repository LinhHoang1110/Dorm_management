$(document).ready(function(){
    console.log('jquery loaded');
    $.ajax({
        type:'GET',
        url:'/login_user_info',
        success: function(login_user){
            if(login_user){
                $("#username").text(login_user.username);
                $("#id_user").text(login_user.id);
            }else{
                window.location.href = '/login_admin';
            }
        }
    });
    $('#log_out').on('click',function(){
        $.ajax({
            type:"get",
            url:"/log_out",
            success: function(res){
                window.location.href = '/homepage_admin';
                console.log(res);
            },
        })
    });
});