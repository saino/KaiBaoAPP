// 文件名称: PersonalCustomerModel
//
// 创 建 人: fishYu
// 创建日期: 2016/9/5 11:46
// 描    述: 我的计划书数据对象
"use strict";
define([], function () {
    var PersonalCustomerModel = function () {
    };

    var test = {
        "status": "0",
        "errorMessages": [],
        "userId": 9100001,
        "customerItemList": [{"A":[["AYJ","13701883239"]]},{"B":[["八宝1","18516221508"],["八宝2","22222222222"],["八宝3","333333333333"],["八宝4","4444444444"],["八宝5","555555555555"],["八宝6","66666666666"],["八宝7","77777777777"]]},{"C":[["陈四1","11111111111"],["陈四2","22222222222"],["陈四3","333333333333"],["陈四4","4444444444"],["陈四5","555555555555"],["陈四6","66666666666"],["陈四7","77777777777"]]},{"D":[["Daniel Higgins Jr.","(408) 555-3514"],["David Taylor","555-610-6679"]]},{"H":[["Hank M. Zakroff","(707) 555-1854"]]},{"J":[["John Appleseed","888-555-1212"]]},{"L":[["李二1","1111111111"],["李二2","2222222222222"],["李二3","3333333333"],["李二4","44444444444"],["李二5","5555555555555"],["李二6","6666666666666"],["李二7","777777777777"],["李二8","8888888888888"],["李二9","9999999999999"],["李二10","101010101010"],["李二11","1111111111"],["李二12","121212121212"]]},{"K":[["Kate Bell","(415) 555-3695"]]},{"Z":[["张三1","111111111"],["张三2","111111111"],["张三3","111111111"],["张三4","111111111"],["张三5","111111111"],["张三6","111111111"],["张三7","111111111"],["张三8","111111111"],["张三9","111111111"],["张三10","10101010101010"],["张三11","111111111"],["张三12","111111111"],["张三13","111111111"],["张三14","111111111"],["张三15","111111111"],["张三16","111111111"],["张三17","111111111"],["张三18","111111111"]]},{"#":[["1111","255-4455"]]}]

    };

    /**
     * 获取个人客户列表
     * @param currentUserId  当前用户ID
     * @param cb_ok
     * @param cb_err
     */
    PersonalCustomerModel.prototype.getCustomerItemList = function (currentUserId, cb_ok, cb_err) {
        if (cb_ok) {
            cb_ok(test);
        }
    };
    PersonalCustomerModel.prototype.queryAgentCustomers = function(options, cb_ok, cb_err){
        var url = utils.serverConfig.serverUrl + "/ls/services/dt/planService/getClientList";
        console.log(options);
        $.ajax({
            method: "POST",
            url: url,
            data: JSON.stringify(options),
            contentType: "application/json",
            dataType: "json",
            processData: false,
            success: function(data){
                cb_ok && cb_ok(data);
            },
            error: function(data){
                cb_err && cb_err(data);
            }
        });

    };

    var personalCustomerModel = new PersonalCustomerModel();
    return personalCustomerModel;
});