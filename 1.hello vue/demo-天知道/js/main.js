/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */
var app = new Vue({
    el: '#app',
    data: {
        city: '',
        forecast: []
    },
    methods: {
        get: function () {
            //这样是不行的,这里应该算是赋值,而不是类似this的指针.
            // var that = this.forecast;
            var that = this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city).then(function (res) {
                console.log(res.data.data.forecast);
                that.forecast = res.data.data.forecast
                console.log(that.forecast);
            }, function (error) {
                console.log(error);
            })
        },
        changeCity: function (city) {
            this.city = city;
            //函数调用也要用this哦
            this.get();
        }

    }
})