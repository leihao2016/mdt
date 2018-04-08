## meilele developer tool(mdt)

mdt是为美乐乐前端开发的命令行工具，未前端文件及项目提供统一标准、规范的模版文件。

### 一、安装：
npm install mllfe -g


### 二、命令介绍

mdt工具目前主要包含两个重要命令：

1、create

2、widget


#### create

使用方法：
mtd create <name> -type

type：

-t：html，创建一个标准的html文件

-d：dwt，创建一个dwt文件

-t：tpl，创建一个tpl文件

-j：js，创建一个标准规范的js文件

-c：css，创建一个标准规范的css文件

-p：project，创建一个标准规范的项目文件，包括模版、样式、脚本、背景图片、组件等

name：

文件或项目名称，请确保名称与已经存在的项目不要冲突，工具会检测是否同名存在，存在则不执行操作。


#### widget

开发中...