const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
var count = 99;
const countSheep = () => {
    count = count - 1;
    return count;
}
jQuery(window).on("load", function () {
    console.log("sheeeep");
    $('#output').hide();
    $('#answerBox').hide();
    $("#result").hide();
    $("#msg").hide();

    $(".sheepToLeft").each(function () {
        
        $(this).css({ top: `${getRandom(1, 99)}%`, left: `${getRandom(12, 99)}%`, position: 'absolute' });
    });
    $(".sheepToRight").each(function () {
        
        $(this).css({ top: `${getRandom(1, 99)}%`, left: `${getRandom(1, 90)}%`, position: 'absolute' });
    });
    $(".sheepToRight2").each(function () {
        
        $(this).css({ top: `${getRandom(1, 99)}%`, left: `${getRandom(1, 50)}%`, position: 'absolute' });
    });

    $('.sheepToLeft,.sheepToRight,.sheepToRight2').hover(
        function () { $(this).addClass('larger'); },
        function () { $(this).removeClass('larger'); }
    );

    $('.sheepToLeft,.sheepToRight,.sheepToRight2').on("click",
        function () {
            $(this).addClass('disappear');
            countSheep();
            // console.log("counted");

            if (count === 0) {
                $('#flexbox').show();
                $('#output').show();
                $('#answerBox').show();
                console.log('All Counted');
            }
        });



    $('#submit').on("click", function () {
        $('#answerBox').hide();
        $("#result").show();
        $('#msg').fadeToggle("slow");
    });



});

