const Mock = require("mockjs")
Mock.mock("/Hicool/data","get",require("./json/data"))
Mock.mock("/Hicool/one","get",require("./json/new"))
Mock.mock("/Hicool/lun","get",require("./json/lun"))
Mock.mock("/Hicool/two","get",require("./json/head"))
Mock.mock("/Hicool/three","get",require("./json/getnew"))
Mock.mock("/Hicool/four","get",require("./json/header"))
Mock.mock("/Hicool/five","get",require("./json/video"))