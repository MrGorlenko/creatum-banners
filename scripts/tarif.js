$(document).ready(function(){

    function addSpaces(nStr){
        nStr += "";
        var x = nStr.split(".");
        var x1 = x[0];
        var x2 = x.length > 1 ? "." + x[1] : "";
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + " " + "$2");
        }
        return x1 + x2;
    };

    jQuery( ".fcalcp5_vedyshiy" ).slider({
        range: "min",
        value: 0,
        min: 0,
        max: 100,
        step: 10,
        animate:true,
        slide: function( event, ui ) {
    if (ui.value==50000){ jQuery( ".fcalcp5_vedyshiy_rez" ).html("<span>0</span>");  }
    else jQuery( ".fcalcp5_vedyshiy_rez" ).html("<span class='runner__label'>" + addSpaces(ui.value) + "</span>");
    crachet();
    },
    stop: function( event, ui ) {
    }
    });

    jQuery( ".fcalcp5_decor" ).slider({
        range: "min",
        value: 0,
        min: 0,
        max: 100,
        step: 10,
        animate:true,
        slide: function( event, ui ) {
    if (ui.value==15000){ jQuery( ".fcalcp5_decor_rez" ).html("<span>0</span>");  }
    else jQuery( ".fcalcp5_decor_rez" ).html("<span class='runner__label'>" + addSpaces(ui.value) + "</span>");
    crachet();
    },
    stop: function( event, ui ) {
    }
    });

    jQuery( ".fcalcp5_html" ).slider({
        range: "min",
        value: 0,
        min: 0,
        max: 100,
        step: 10,
        animate:true,
        slide: function( event, ui ) {
    if (ui.value==15000){ jQuery( ".fcalcp5_html_rez" ).html("<span>0</span>");  }
    else jQuery( ".fcalcp5_html_rez" ).html("<span class='runner__label'>" + addSpaces(ui.value) + "</span>");
    crachet();
    },
    stop: function( event, ui ) {
    }
    });

    function crachet() {
        var summa = parseInt(jQuery(".fcalcp5_vedyshiy_rez span").text().replace(/\s+/g, "")) + parseInt(jQuery(".fcalcp5_decor_rez span").text().replace(/\s+/g, "")) + parseInt(jQuery(".fcalcp5_html_rez span").text().replace(/\s+/g, ""));
        jQuery(".fcalcp9 ").html("<span>" + addSpaces(summa) + "</span>");
        }

})