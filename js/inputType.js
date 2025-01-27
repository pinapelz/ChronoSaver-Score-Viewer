// 인풋
$(document).on("keyup blur focus keydown", "input[typeID]", function(){
	$(this).val( $(this).val().replace(/[^a-zA-Z0-9\_]/gi,"") ); //영어숫자_만
});
$(document).on("keyup blur focus keydown", "input[typeENGNUM]", function(){
	$(this).val( $(this).val().replace(/[^a-zA-Z0-9]/gi,"") ); //영어숫자_만
});
$(document).on("keyup blur focus keydown", "input[typeCard]", function(){
	$(this).val( $(this).val().replace(/[^a-zA-Z0-9]/gi,"") ); //영어숫자_만
});
$(document).on("keyup blur focus keydown", "input[typeEmail]", function(e){
	$(this).val( $(this).val().replace(/[^a-zA-Z0-9\.@_-]/gi,"") ); //영어숫자_.만
});
$(document).on("keyup blur focus keydown", "input[typeTel]", function(){
	$(this).val( $(this).val().replace(/[^0-9\-\+\ ]/gi,"") ); //숫자만
});
$(document).on("keyup blur focus keydown", "input[typeNum2]", function(){
	$(this).val( $(this).val().replace(/[^0-9\-\+\ ]/gi,"") ); //숫자만
});
$(document).on("keyup blur focus keydown", "input[typeMoney]", function(){
	$(this).val( $(this).val().replace(/[^0-9\,]/gi,"") ); //금액형식(숫자+,)
});
$(document).on("keyup blur focus keydown", "input[typeNKor]", function(){
	$(this).val( $(this).val().replace(/[^\!-z]/gi,"") ); //한글제한
});
$(document).on("keyup blur focus keydown", "input[typeEng]", function(){
	$(this).val( $(this).val().replace(/[^a-z]/gi,"") ); //영어만
});
$(document).on("keyup blur focus keydown", "input[typeKor]", function(){
	$(this).val( $(this).val().replace(/[^가-힣ㄱ-ㅎㅏ-ㅣ\)\(]/gi,"") ); //한글만
});
$(document).on("keyup blur focus keydown", "input[typeNSpec]", function(){
	$(this).val( $(this).val().replace(/[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9)]/gi,"") ); //특수문자제한
});
$(document).on("keyup blur focus keydown", "input[Nnum]", function(){
	$(this).val( $(this).val().replace(/[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z)]/gi,"") ); //한영
});


$(document).on("keyup blur focus keydown", "input[typeNum]", function(){
	$(this).val( $(this).val().replace(/[^0-9]/gi,"") ); //숫자만
});
$(document).on("keyup blur focus keydown", "input[typeDate]", function(){
	$(this).val( $(this).val().replace(/[^0-9\-]/gi,"") ); //날짜형식(숫자+-)
});
$(document).ready(function() {
	$('input[typeNum]').attr('oninput', "this.value = this.value.replace(/[^0-9]/g, '').replace(/(\\..*)/g, '$1');");
	$('input[typeDate]').attr('oninput', "this.value = this.value.replace(/[^0-9\-]/g, '').replace(/(\\..*)\-/g, '$1');");
	$('input[typeEmail]').attr('oninput', "this.value = this.value.replace(/[^a-zA-Z0-9\.@_-]/g, '').replace(/(\\..*)/g, '$1');");
	$('input[typeENGNUM]').attr('oninput', "this.value = this.value.replace(/[^a-zA-Z0-9]/g, '').replace(/(\\..*)/g, 'U$1');");
	$('input[typeID]').attr('oninput', "this.value = this.value.replace(/[^a-zA-Z0-9\_]/g, '').replace(/(\\..*)/g, 'U$1');");
	$('input[typeTel]').attr('oninput', "this.value = this.value.replace(/[^0-9\-\+\ ]/g, '').replace(/(\\..*)/g, 'U$1');");
});

// jQuery(function($){ // 달력
//     $.datepicker.regional["ko"] = {
//         closeText: "닫기",
//         prevText: "이전달",
//         nextText: "다음달",
//         currentText: "오늘",
//         monthNames: ["1월(JAN)","2월(FEB)","3월(MAR)","4월(APR)","5월(MAY)","6월(JUN)", "7월(JUL)","8월(AUG)","9월(SEP)","10월(OCT)","11월(NOV)","12월(DEC)"],
//         monthNamesShort: ["1월","2월","3월","4월","5월","6월", "7월","8월","9월","10월","11월","12월"],
//         dayNames: ["일","월","화","수","목","금","토"],
//         dayNamesShort: ["일","월","화","수","목","금","토"],
//         dayNamesMin: ["일","월","화","수","목","금","토"],
//         weekHeader: "Wk",
//         dateFormat: "yymmdd",
//         firstDay: 0,
//         isRTL: false,
//         showMonthAfterYear: true,
//         yearSuffix: ""
//     };
// 	$.datepicker.setDefaults($.datepicker.regional["ko"]);
// });
//
// $(".datepicker").datepicker({ // 달력
//   changeMonth: true,
//   changeYear: true,
//   dateFormat: 'yy-mm-dd',
//   showButtonPanel: true,
//   yearRange: 'c-99:c+99',
//   minDate: '-50m',
//   maxDate: '+365d;'
// });



$(document).ready(function() { // 드래그
	$('.chk_drag').dragCheck();
});
