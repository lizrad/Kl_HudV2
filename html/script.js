var lastPos = null
window.addEventListener('message', function (event) {
    $("#StatusHud #stress").hide()
    $("#StatusHud #playerid").hide()
    $("#StatusHud #fuel").hide()
    let data = event.data
    loadStats = function () {
        $('#shieldval').html(Math.round(data.armour))
        $('#hungerlevel').html(Math.round(data.food))
        $('#waterlevel').html(Math.round(data.thirst))
        $('#stresslevel').html(Math.round(data.stress))
        $('#playeridlevel').html(Math.round(data.playerid))
        $('#fuellevel').html(Math.round(data.fuel))
    }
    if (data.hud && !data.pauseMenu) {
        $("body").show();
        if (data.health != -100) {
            $('#healtlevel').html(Math.round(data.health))
            if (data.health < 50) {
                $('#healtlevel').addClass('red')
            } else {
                $('#healtlevel').removeClass('red')
            }
        } else if (data.health == -100) {
            $('#healtlevel').html("0")
            $('#healtlevel').addClass('red')
        }
        if (lastPos != data.hudPosition) {
            lastPos = data.hudPosition

            // 
            if (data.hudPosition == 'right') {
                $("#StatusHud").removeClass("hShow")
                $("#StatusHud").addClass("vShow")
                $("#StatusHud").animate({
                    "left": '28vh',
                    "bottom": '2.8vh',
                    "flex-direction": 'column'
                }, 200);
                $(".fas").animate({
                    "font-size": '1rem'
                }, 200);
                $(".textstat").animate({
                    "width": '3vh',
                }, 200);
                $(".statback").animate({
                    "height": '1.5vh',
                    "margin-right": '0.0vh'
                }, 200);
            } else {
                $("#StatusHud").removeClass("vShow")
                $("#StatusHud").addClass("hShow")
                $("#StatusHud").animate({
                    "left": '0.7vh',
                    "bottom": '0.7vh'
                }, 350);
                $(".fas").animate({
                    "font-size": '1rem'
                }, 350);
                $(".textstat").animate({
                    "width": '3vh'
                }, 350);
                $(".statback").animate({
                    "height": 'auto',
                    "margin-right": '0.7vh'
                }, 200);
            }
        }
        if (data.fuelPosition == 'right') {
            $("#StatusHud #fuel").show()
        } else {
            $("#StatusHud #fuel").hide()
        }
        loadStats();
        if (data.stress) {
            $("#StatusHud #stress").show()
        } else if (!data.stress) {
            $("#StatusHud #stress").hide()
        }
        if (data.playerid) {
            $("#StatusHud #playerid").show()
        } else if (!data.playerid) {
            $("#StatusHud #playerid").hide()
        }
    }
});

var lowPath =
    `<path d="
    M17 19h-3a.75.75 0 010-1.5h3a.75.75 0 010 1.5z
    M11 19h-3a.75.75 0 010-1.5h3a.75.75 0 010 1.5z
    M5 19h-3a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75z" data-original="#000000" xmlns="http://www.w3.org/2000/svg"/>`

var midPath =
    `<path d="
    M17 19h-3a.75.75 0 010-1.5h3a.75.75 0 010 1.5z
    M11 19h-3a.75.75 0 01-.75-.75v-8.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v8.25a.75.75 0 01-.75.75z
    M5 19h-3a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75z" data-original="#000000" xmlns="http://www.w3.org/2000/svg"/>`

var highPath =
    `<path d="
    M17 19h-3a.75.75 0 01-.75-.75v-12.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v12.25a.75.75 0 01-.75.75z
    M11 19h-3a.75.75 0 01-.75-.75v-8.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v8.25a.75.75 0 01-.75.75z
    M5 19h-3a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75z" data-original="#000000" xmlns="http://www.w3.org/2000/svg"/>`