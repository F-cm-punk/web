$(function(){
	$("#navBox ul li").click(function(){
		var i = $(this).index();
		$("#navBox ul li").eq(i).addClass("nav_active").siblings().removeClass("nav_active");
	});
			
	$("#nav .dh_box div").click(function(){
		var e = $(this).index();
		$("#nav .dh_box div").eq(e).addClass("nav_active").siblings().removeClass("nav_active");
	});
						
	$(window).scroll(function() {
		if($(window).scrollTop() >= 200){
			$('.actGotop').fadeIn(300); 
		}else{    
			$('.actGotop').fadeOut(300);
		}
	});

	$('.actGotop').click(function(){
		$('html,body').animate({scrollTop: '0px'}, 400);
	});
});

;!function(){
	var laypage = layui.laypage;
	
	laypage.render({
		elem: 'test_nv' //test1 是 ID，不用加 #号
		,url: '' //接口
  		,count: 100 //数据总数，从服务端得到
  		,theme: '#B73CCB'
		,limit: 10 //每页显示的条数
	    ,prev: '上一页'
	    ,next: '下一页'
	    ,page: true
		,jump: function(obj, first){
		    //obj包含了当前分页的所有参数，比如：
		    console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
			//console.log(obj.limit); //得到每页显示的条数
		    
		    //首次不执行
		    if(!first){
		      //do something
		      //layer.msg('第'+ obj.curr +'页');
		    }
		  }
	});
	
}();





