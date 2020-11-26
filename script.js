$( document ).ready(function() {
        console.log( "ready!" );
        $('#submit').click(function validation(){
            let x =$("#username").val();
            let y =$("#Password1").val();
                    function print(val){
                        alert(val);
                    }
                    function validate(){
                        if(x=="admin"&y=="12345")
                        {window.location.href = 'main.html';
                            return true;}
        
                    else if(x==""||y==""){
                    print("Enter the field value");
                    return false;}
                    else{
                    print("Invalid login credientials");
                    return false;}
                    }
            validate();
          

    });

        $(".buttontodo").click(function ajax(){
            var xhttp= new XMLHttpRequest();
            xhttp.onreadystatechange=function(){
                                if(this.readyState==4 && this.status==200)
                                {
                                    var response = JSON.parse(this.responseText);
                                    var table = document.getElementById("myTable");
                                    var box=table.getElementsByTagName("INPUT");
                                    var x =0;
                                    // console.log(response);
                                        for(var i=0;i<200;i++){
                                            var a=response[i].title;
                                            
                                            // console.log(a);

                                            var row =`<tr>  <td> <input type="checkbox" class="form-check-input" id="Check1" value="falses">${a}</td></tr>`
                                            table.innerHTML += row;

        
                                
                                        }
                                
                                        
                                        let myPromise = new Promise(function(myResolve, myReject) {
                                            $(box).change(function(){
                                                    var tick = $(box).filter(':checked').length;
                                                //   alert(tick); 
                                                if(tick>=5)
                                                        { myResolve("Congrats. 5 Tasks have been Successfully Completed");}

                                                });
                                                

                                        });
                                        
                                        myPromise.then(
                                            function(value) {alert(value);},
                                            // function(error) {myDisplayer(error);}
                                        );
                                                
                                    
            // $(box).change(function(){
            //     var tick = $(box).filter(':checked').length;
            // //    alert(tick);
            // if(tick>=5)
            // {
            //     alert(" Congrats. 5 Tasks have been Successfully Completed");
            // }
            // });
            
                                    
            
                                }
                            

                            }
                        

        xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
        xhttp.send();
            
        });

        $('.nav-1').mouseover(500,function(){
            $(".fa-home").css("font-size","1.2em" );
            $(".fa-home").css("padding-left","0.5em" );
        })


        $('.nav-1').mouseout(500,function(){
            $(".fa-home").css("font-size","0.7em");
            $(".fa-home").css("padding-left","1.2em" );
        })


        $('.nav-2').mouseover(500,function(){
            $(".fa-tasks").css("font-size","1.2em");
            $(".fa-tasks").css("padding-left","1.1em" );
        })


        $('.nav-2').mouseout(500,function(){
            $(".fa-tasks").css("font-size","0.7em");
            $(".fa-tasks").css("padding-left","2em" );
        })


        $('.nav-3').mouseover(500,function(){
            $(".fa-sign-out").css("font-size","1.2em");
            $(".fa-sign-out").css("padding-left","1.1em" );
        })


        $('.nav-3').mouseout(500,function(){
            $(".fa-sign-out").css("font-size","0.7em");
            $(".fa-sign-out").css("padding-left","2em" );
        })

});