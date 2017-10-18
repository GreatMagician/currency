var urltoday = 'https://www.cbr-xml-daily.ru/daily_json.js';
var urlyesterday = 'https://www.cbr-xml-daily.ru/archive/';// https://www.cbr-xml-daily.ru/archive/2017-09-16.js
var beginDay;
var endDay;
var cod;
var today;
var err;
function parse(){
    beginDay = $('#dataBegin').val();
    endDay = $('#dataEnd').val();
    cod = $('#kod').val();
    $('#tabl-body').html('');
    getData(urltoday, getToDay);
    err=true;
    var NewImg = new Image ();
    NewImg.src = 'https://www.google.ru/textinputassistant/tia.png';
    NewImg.onload = function() {
        err=false;
    };
    setTimeout(errInet, 5000);
}
function errInet() {
    if (err){
        alert("Нет данных, проверьте интернет");
    }
}

function parseInfo() {
    var dateFirst = new Date(beginDay);
    var dateSecond = new Date(endDay);
    var timeDiff = Math.abs(dateSecond.getTime() - dateFirst.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    var data;
    var url;
    if (beginDay == endDay && endDay == today){
        getData(urltoday, addDataTable);
    }else if (diffDays == 1){
        url = urlyesterday + beginDay + '.js';
        getData(urltoday, addDataTable);
        getData(url, addDataTable);
    }else if (diffDays > 1){
        for (var i=0; i <= diffDays; i++){
            if (i==0){
                url = urlyesterday + beginDay + '.js';
                getData(url, addDataTable);
            }else if (i < diffDays){

                dateFirst.setDate(dateFirst.getDate() + 1);
                var newDayFormat = dateFirst.getFullYear() + '-';
                if (dateFirst.getMonth() + 1 < 10){
                    newDayFormat +='0' + (dateFirst.getMonth() + 1) + '-';
                }else{
                    newDayFormat += (dateFirst.getMonth() + 1) + '-';
                }
                if (dateFirst.getDate() < 10){
                    newDayFormat +='0' +  dateFirst.getDate();
                }else{
                    newDayFormat +=  + dateFirst.getDate();
                }

                url = urlyesterday + newDayFormat + '.js';
                getData(url, addDataTable);
            }else if (i== diffDays){
                getData(urltoday, addDataTable);
            }
        }
    }

}

function getToDay(url, data) {
    today = (data.Date).substr(0, 10);
    parseInfo();
}

function addDataTable(url, data) {
    if (cod == 'AUD') {
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.AUD.CharCode + '</td>' +
            '<td>' + data.Valute.AUD.Nominal + '</td>' +
            '<td>' + data.Valute.AUD.Name + '</td>' +
            '<td>' + data.Valute.AUD.Value + '</td>' + '</tr>');
    } else if (cod == 'AZN'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.AZN.CharCode + '</td>' +
            '<td>' + data.Valute.AZN.Nominal + '</td>' +
            '<td>' + data.Valute.AZN.Name + '</td>' +
            '<td>' + data.Valute.AZN.Value + '</td>' + '</tr>');
    }else if (cod == 'BGN'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.BGN.CharCode + '</td>' +
            '<td>' + data.Valute.BGN.Nominal + '</td>' +
            '<td>' + data.Valute.BGN.Name + '</td>' +
            '<td>' + data.Valute.BGN.Value + '</td>' + '</tr>');
    }else if (cod == 'BRL'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.BRL.CharCode + '</td>' +
            '<td>' + data.Valute.BRL.Nominal + '</td>' +
            '<td>' + data.Valute.BRL.Name + '</td>' +
            '<td>' + data.Valute.BRL.Value + '</td>' + '</tr>');
    }else if (cod == 'BYN'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.BYN.CharCode + '</td>' +
            '<td>' + data.Valute.BYN.Nominal + '</td>' +
            '<td>' + data.Valute.BYN.Name + '</td>' +
            '<td>' + data.Valute.BYN.Value + '</td>' + '</tr>');
    }else if (cod == 'CAD'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.CAD.CharCode + '</td>' +
            '<td>' + data.Valute.CAD.Nominal + '</td>' +
            '<td>' + data.Valute.CAD.Name + '</td>' +
            '<td>' + data.Valute.CAD.Value + '</td>' + '</tr>');
    }else if (cod == 'CHF'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.CHF.CharCode + '</td>' +
            '<td>' + data.Valute.CHF.Nominal + '</td>' +
            '<td>' + data.Valute.CHF.Name + '</td>' +
            '<td>' + data.Valute.CHF.Value + '</td>' + '</tr>');
    }else if (cod == 'CNY'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.CNY.CharCode + '</td>' +
            '<td>' + data.Valute.CNY.Nominal + '</td>' +
            '<td>' + data.Valute.CNY.Name + '</td>' +
            '<td>' + data.Valute.CNY.Value + '</td>' + '</tr>');
    }else if (cod == 'CZK'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.CZK.CharCode + '</td>' +
            '<td>' + data.Valute.CZK.Nominal + '</td>' +
            '<td>' + data.Valute.CZK.Name + '</td>' +
            '<td>' + data.Valute.CZK.Value + '</td>' + '</tr>');
    }else if (cod == 'DKK'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.DKK.CharCode + '</td>' +
            '<td>' + data.Valute.DKK.Nominal + '</td>' +
            '<td>' + data.Valute.DKK.Name + '</td>' +
            '<td>' + data.Valute.DKK.Value + '</td>' + '</tr>');
    }else if (cod == 'EUR'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.EUR.CharCode + '</td>' +
            '<td>' + data.Valute.EUR.Nominal + '</td>' +
            '<td>' + data.Valute.EUR.Name + '</td>' +
            '<td>' + data.Valute.EUR.Value + '</td>' + '</tr>');
    }else if (cod == 'GBP'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.GBP.CharCode + '</td>' +
            '<td>' + data.Valute.GBP.Nominal + '</td>' +
            '<td>' + data.Valute.GBP.Name + '</td>' +
            '<td>' + data.Valute.GBP.Value + '</td>' + '</tr>');
    }else if (cod == 'HKD'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.HKD.CharCode + '</td>' +
            '<td>' + data.Valute.HKD.Nominal + '</td>' +
            '<td>' + data.Valute.HKD.Name + '</td>' +
            '<td>' + data.Valute.HKD.Value + '</td>' + '</tr>');
    }else if (cod == 'HUF'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.HUF.CharCode + '</td>' +
            '<td>' + data.Valute.HUF.Nominal + '</td>' +
            '<td>' + data.Valute.HUF.Name + '</td>' +
            '<td>' + data.Valute.HUF.Value + '</td>' + '</tr>');
    }else if (cod == 'INR'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.INR.CharCode + '</td>' +
            '<td>' + data.Valute.INR.Nominal + '</td>' +
            '<td>' + data.Valute.INR.Name + '</td>' +
            '<td>' + data.Valute.INR.Value + '</td>' + '</tr>');
    }else if (cod == 'JPY'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.JPY.CharCode + '</td>' +
            '<td>' + data.Valute.JPY.Nominal + '</td>' +
            '<td>' + data.Valute.JPY.Name + '</td>' +
            '<td>' + data.Valute.JPY.Value + '</td>' + '</tr>');
    }else if (cod == 'KGS'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.KGS.CharCode + '</td>' +
            '<td>' + data.Valute.KGS.Nominal + '</td>' +
            '<td>' + data.Valute.KGS.Name + '</td>' +
            '<td>' + data.Valute.KGS.Value + '</td>' + '</tr>');
    }else if (cod == 'KRW'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.KRW.CharCode + '</td>' +
            '<td>' + data.Valute.KRW.Nominal + '</td>' +
            '<td>' + data.Valute.KRW.Name + '</td>' +
            '<td>' + data.Valute.KRW.Value + '</td>' + '</tr>');
    }else if (cod == 'KZT'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.KZT.CharCode + '</td>' +
            '<td>' + data.Valute.KZT.Nominal + '</td>' +
            '<td>' + data.Valute.KZT.Name + '</td>' +
            '<td>' + data.Valute.KZT.Value + '</td>' + '</tr>');
    }else if (cod == 'MDL'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.MDL.CharCode + '</td>' +
            '<td>' + data.Valute.MDL.Nominal + '</td>' +
            '<td>' + data.Valute.MDL.Name + '</td>' +
            '<td>' + data.Valute.MDL.Value + '</td>' + '</tr>');
    }else if (cod == 'NOK'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.NOK.CharCode + '</td>' +
            '<td>' + data.Valute.NOK.Nominal + '</td>' +
            '<td>' + data.Valute.NOK.Name + '</td>' +
            '<td>' + data.Valute.NOK.Value + '</td>' + '</tr>');
    }else if (cod == 'PLN'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.PLN.CharCode + '</td>' +
            '<td>' + data.Valute.PLN.Nominal + '</td>' +
            '<td>' + data.Valute.PLN.Name + '</td>' +
            '<td>' + data.Valute.PLN.Value + '</td>' + '</tr>');
    }else if (cod == 'RON'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.RON.CharCode + '</td>' +
            '<td>' + data.Valute.RON.Nominal + '</td>' +
            '<td>' + data.Valute.RON.Name + '</td>' +
            '<td>' + data.Valute.RON.Value + '</td>' + '</tr>');
    }else if (cod == 'SEK'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.SEK.CharCode + '</td>' +
            '<td>' + data.Valute.SEK.Nominal + '</td>' +
            '<td>' + data.Valute.SEK.Name + '</td>' +
            '<td>' + data.Valute.SEK.Value + '</td>' + '</tr>');
    }else if (cod == 'SGD'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.SGD.CharCode + '</td>' +
            '<td>' + data.Valute.SGD.Nominal + '</td>' +
            '<td>' + data.Valute.SGD.Name + '</td>' +
            '<td>' + data.Valute.SGD.Value + '</td>' + '</tr>');
    }else if (cod == 'TJS'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.TJS.CharCode + '</td>' +
            '<td>' + data.Valute.TJS.Nominal + '</td>' +
            '<td>' + data.Valute.TJS.Name + '</td>' +
            '<td>' + data.Valute.TJS.Value + '</td>' + '</tr>');
    }else if (cod == 'TMT'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.TMT.CharCode + '</td>' +
            '<td>' + data.Valute.TMT.Nominal + '</td>' +
            '<td>' + data.Valute.TMT.Name + '</td>' +
            '<td>' + data.Valute.TMT.Value + '</td>' + '</tr>');
    }else if (cod == 'TRY'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.TRY.CharCode + '</td>' +
            '<td>' + data.Valute.TRY.Nominal + '</td>' +
            '<td>' + data.Valute.TRY.Name + '</td>' +
            '<td>' + data.Valute.TRY.Value + '</td>' + '</tr>');
    }else if (cod == 'UAH'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.UAH.CharCode + '</td>' +
            '<td>' + data.Valute.UAH.Nominal + '</td>' +
            '<td>' + data.Valute.UAH.Name + '</td>' +
            '<td>' + data.Valute.UAH.Value + '</td>' + '</tr>');
    }else if (cod == 'USD'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.USD.CharCode + '</td>' +
            '<td>' + data.Valute.USD.Nominal + '</td>' +
            '<td>' + data.Valute.USD.Name + '</td>' +
            '<td>' + data.Valute.USD.Value + '</td>' + '</tr>');
    }else if (cod == 'UZS'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.UZS.CharCode + '</td>' +
            '<td>' + data.Valute.UZS.Nominal + '</td>' +
            '<td>' + data.Valute.UZS.Name + '</td>' +
            '<td>' + data.Valute.UZS.Value + '</td>' + '</tr>');
    }else if (cod == 'XDR'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.XDR.CharCode + '</td>' +
            '<td>' + data.Valute.XDR.Nominal + '</td>' +
            '<td>' + data.Valute.XDR.Name + '</td>' +
            '<td>' + data.Valute.XDR.Value + '</td>' + '</tr>');
    }else if (cod == 'ZAR'){
        $('#tabl-body').append('<tr>' + '<td>' + (data.Date).substr(0, 10) + '</td>' +
            '<td>' + data.Valute.ZAR.CharCode + '</td>' +
            '<td>' + data.Valute.ZAR.Nominal + '</td>' +
            '<td>' + data.Valute.ZAR.Name + '</td>' +
            '<td>' + data.Valute.ZAR.Value + '</td>' + '</tr>');
    }else {
        alert('Валюта не найдена');
    }

}


function getData(url, callback) {
    $.ajax({
        url: url,
        beforeSend: function( xhr ) {
            xhr.overrideMimeType( "text/plain; charset=utf-8" );
        }
    })
        .done(function( data ) {
            var json = JSON.parse(data);
            callback (url, json);
        });
}


