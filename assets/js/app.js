$(document).ready(function(){
    var count = 0;

    const dateElement=document.getElementById("date");
    const options={weekday: "long", month:"short", day:"numeric"};
    const today=new Date();

    // let data = localStorage.getItem("TODO");

    // if(data){
    //     LIST = JSON.parse(data);
    //     id = LIST.length;
    //     loadList(LIST);
    // }
    // else LIST = [];
    // ild = 0;

    $(".fa-sync-alt").click(function(){
        $(".content").empty();
    })

    dateElement.innerHTML=today.toLocaleString("en-US", options);

    $(".add").click(function(){
        var inputVal = $(".form-control").val();

       if(inputVal !=""){
        count ++;
            $(".todo-list").append(`
                <li>
                        <div class="left-cont">
                            <input type="checkbox" id="check-${count}" class="checked" name=""></input>
                            <label for="check-${count}"></label>
                            <span>${inputVal}</span>
                        </div>
                        <span class="remove"><i class="far fa-trash-alt"></i></span>
                </li>`)

            // $(".todo-list").append('<li>' + inputVal + '<i class="fa-light fa-circle-check bg-light"></i> <i class="fa-solid fa-trash-can bg-light"></i>')
            // }
            $(".form-control").val("");
       }
    })

    //
    // $(document).on('click', '.fa-light', function(){
    //     $(this).parent('.todo-list').toggleClass('checked');
    // })
    //


    // $(document).on("change", 'input[type="checkbox"]', function(){
    //     if($(this).is(':checked')){
    //         $(this).closest("li").children(".remove").removeClass("active");
    //     }
    //     else{
    //         $(this).closest("li").children(".remove").addClass("active");
    //     }
    // })

    $(document).on("change", 'input[type="checkbox"]', function(){
            if($(this).is(':checked')){
                $(this).parent('li').toggleClass('checked');
            }
            // else{
            //     $(this).closest("li").children(".remove").addClass("active");
            // }
        })

    $(document).on('click', '.remove', function(){
        $(this).parent().remove();
    })
})