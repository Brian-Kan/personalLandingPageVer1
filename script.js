$( document ).ready(function() {

    
    $("#hamMenu").on('click',()=>{
        
        $(".headerUL").toggleClass( "hidden" )
        $(".headerUL").toggleClass( "sideMenu" )

    })

    // $(".navItem").on('click',()=>{
        
    //     $(".headerUL").toggleClass( "menuClose" )

    // })

});