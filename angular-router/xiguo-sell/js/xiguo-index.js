var intDiff = parseInt(90000); //倒计时总秒数量
var day_11=document.getElementById("day_show11");
var hour_11=document.getElementById("hour_showw11");
var minute_11=document.getElementById("minute_showw11");
var second_11=document.getElementById("second_showw11");
// 第11组

var intDiff10 = parseInt(80000); //倒计时总秒数量
var day_10=document.getElementById("day_show10");
var hour_10=document.getElementById("hour_showw10");
var minute_10=document.getElementById("minute_showw10");
var second_10=document.getElementById("second_showw10");
// 第10组

var intDiff09 = parseInt(70000); //倒计时总秒数量
var day_09=document.getElementById("day_show09");
var hour_09=document.getElementById("hour_showw09");
var minute_09=document.getElementById("minute_showw09");
var second_09=document.getElementById("second_showw09");
// 第09组

var intDiff08 = parseInt(70000); //倒计时总秒数量
var day_08=document.getElementById("day_show08");
var hour_08=document.getElementById("hour_showw08");
var minute_08=document.getElementById("minute_showw08");
var second_08=document.getElementById("second_showw08");
// 第08组

var intDiff07 = parseInt(70000); //倒计时总秒数量
var day_07=document.getElementById("day_show07");
var hour_07=document.getElementById("hour_showw07");
var minute_07=document.getElementById("minute_showw07");
var second_07=document.getElementById("second_showw07");
// 第07组

var intDiff06 = parseInt(70000); //倒计时总秒数量
var day_06=document.getElementById("day_show06");
var hour_06=document.getElementById("hour_showw06");
var minute_06=document.getElementById("minute_showw06");
var second_06=document.getElementById("second_showw06");
// 第06组

var intDiff05 = parseInt(70000); //倒计时总秒数量
var day_05=document.getElementById("day_show05");
var hour_05=document.getElementById("hour_showw05");
var minute_05=document.getElementById("minute_showw05");
var second_05=document.getElementById("second_showw05");
// 第05组

var intDiff04 = parseInt(70000); //倒计时总秒数量
var day_04=document.getElementById("day_show04");
var hour_04=document.getElementById("hour_showw04");
var minute_04=document.getElementById("minute_showw04");
var second_04=document.getElementById("second_showw04");
// 第04组

var intDiff03 = parseInt(70000); //倒计时总秒数量
var day_03=document.getElementById("day_show03");
var hour_03=document.getElementById("hour_showw03");
var minute_03=document.getElementById("minute_showw03");
var second_03=document.getElementById("second_showw03");
// 第03组

var intDiff02 = parseInt(70000); //倒计时总秒数量
var day_02=document.getElementById("day_show02");
var hour_02=document.getElementById("hour_showw02");
var minute_02=document.getElementById("minute_showw02");
var second_02=document.getElementById("second_showw02");
// 第02组

var intDiff01 = parseInt(70000); //倒计时总秒数量
var day_01=document.getElementById("day_show01");
var hour_01=document.getElementById("hour_showw01");
var minute_01=document.getElementById("minute_showw01");
var second_01=document.getElementById("second_showw01");
// 第01组
			
			
			function timer(intDiff,a,b,c,d) {
				window.setInterval(function() {
					var day = 0,
						hour = 0
						minute = 0,
						second = 0; //时间默认值       
					if(intDiff > 0) {
						day = Math.floor(intDiff / (60 * 60 * 24));
						hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
						minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
						second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
					}
					if(minute <= 9) minute = '0' + minute;
					if(second <= 9) second = '0' + second;
					$(a).html(day + "天");
					$(b).html('<s id="h"></s>' + hour + '时');
					$(c).html('<s></s>' + minute + '分');
					$(d).html('<s></s>' + second + '秒');
					intDiff--;
				}, 1000);
			};
			
			
				
				
	//	timer(intDiff,"#a","#b","c");
	timer(intDiff01,day_01,hour_01,minute_01,second_01);//01
	timer(intDiff02,day_02,hour_02,minute_02,second_02);//02
	timer(intDiff03,day_03,hour_03,minute_03,second_03);//03
	timer(intDiff04,day_04,hour_04,minute_04,second_04);//04
	timer(intDiff05,day_05,hour_05,minute_05,second_05);//05
	timer(intDiff06,day_06,hour_06,minute_06,second_06);//06
	timer(intDiff07,day_07,hour_07,minute_07,second_07);//07
	timer(intDiff08,day_08,hour_08,minute_08,second_08);//08
	timer(intDiff09,day_09,hour_09,minute_09,second_09);//09
	timer(intDiff10,day_10,hour_10,minute_10,second_10);//10
	timer(intDiff,day_11,hour_11,minute_11,second_11);//11
			
				
