
require('common/widget/header/header');
require('index/widget/banner/banner');
require('common/widget/footer/footer');

$('#click').on('click', function(){
	require.async('index/widget/msg/index.msg', function(a){
		a.showMsg();
	});
});
