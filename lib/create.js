
var 
	Promise = require("bluebird"),
	fs = require('fs-extra');


var file = {
	createFileByType: function(name, type) {		
		var file = name + '.' + type;

		return new Promise(function(resolve, reject){
			if (name) {
				fs.exists('./' + file, function(isExist){
					if (isExist) {
						return console.log('文件已经存在');
					}
				});
				resolve();
			} else {
				reject('* 创建失败');
			}
		}).then(function(){			
			fs.copy('./template_file/file.'+type, file, function(err){
				if (err) {
					return console.log(err);
				}

				console.log('* 文件: /'+ file + ' 创建成功');
			});
		});
	},

	createProject: function(name) {
		var path = './' + name;

		return new Promise(function(resolve, reject){
			// 判断是否有同名项目
			if (name) {
				fs.exists(path, function(isExist){
					if (!isExist) {
						resolve();
					} else {
						reject();
					}
				});
			} else {
				return console.log('* 项目名称无效');
			}
		}).then(function(){
			fs.copy('./template_project', name, function(err){
				if (err) {
					return console.log(err);
				}

				fs.readdir('./template_project', function(err, files){
					files.forEach(function(item){
						var m = item.match(/\.(.*)/gi);
						if (m && m.length && m[0]) {
							var opath = name + '/project' + m[0];
							var npath = name + '/' + name + m[0];
							fs.rename(opath, npath, function(){
								console.log('* 文件: /'+ npath + ' 创建成功');
							});
						}
					});

					setTimeout(function(){
						console.log('* 项目: /'+ name + '/ 创建成功');
					}, 50);
				});
			});
		}, function(){
			return console.log('* 项目 \'' + name + '\' 已经存在，请确认');
		});
	}
};

module.exports = function(name, type) {

	if (type === 'project') {
		// 创建一个项目，包括模版、样式、脚本、背景图片...
		file.createProject(name);
	} else {
		// 创建一个指定类型的文件
		file.createFileByType(name, type);
	}

}