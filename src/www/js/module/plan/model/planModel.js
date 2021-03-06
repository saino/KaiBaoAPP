define([

],function(){
    var PlanModel = function(){};
    //获取计划书信息
    PlanModel.prototype.getPlanInfo = function(planId, cb_ok, cb_err){
        var opt = {};
        opt.url = "/ls/services/dt/planService/getPlanInfo";
        opt.type = "POST";
        var data = {};
//        var userId = utils.userObj.id; //不传
//        if(!userId || userId == ""){
//            userId = utils.tempUser && utils.tempUser.id;
//        }
//        data.encryptedUserData = userId;
        data.quotationId = planId;
        opt.data = data;
        opt.success = function(result){
            if(result.status == 0){
                if (cb_ok) cb_ok(result);
            }else{
                if(cb_err) cb_err("数据错误")
            }
        };
        opt.error = function(err){
            if(cb_err) cb_err(err)
        };
        utils.requestData(opt);
    };
    //获取计划书利益演示部份
    PlanModel.prototype.getPlanIllus = function(planId, cb_ok, cb_err){
        var opt = {};
        opt.url = "/ls/services/dt/planService/getPlanIllustration";
        opt.type = "POST";
        var data = {};
        data.quotationId = planId;
        opt.data = data;
        opt.success = function(result){
            if(result.status == 0){
                if (cb_ok) cb_ok(result);
            }else{
                if(cb_err) cb_err("数据错误")
            }
        };
        opt.error = function(err){
            if(cb_err) cb_err(err)
        };
        utils.requestData(opt);
    }
    //获取保险理念
    PlanModel.prototype.getInsuranceConcept = function(planId, cb_ok, cb_err){
        var opt = {};
        opt.url = "/ls/services/dt/planService/getInsuranceSpirit";
        opt.type = "POST";
        var data = {};
        data.quotationId = planId;
        opt.data = data;
        opt.success = function(result){
            if(result.status == 0){
                if (cb_ok) cb_ok(result);
            }else{
                if(cb_err) cb_err(result);
            }
        };
        opt.error = function(err){
            if(cb_err) cb_err(err)
        };
        utils.requestData(opt);
    }
    //获取公司信息集合 服务商、承保商
    PlanModel.prototype.getCompanyInfo = function(planId, cb_ok, cb_err){
        var opt = {};
        opt.url = "/ls/services/dt/planService/getDaTongInfo";
        opt.type = "POST";
        var data = {};
        data.quotationId = planId;
        opt.data = data;
        opt.success = function(result){
            if(result.status == 0){
                if (cb_ok) cb_ok(result);
            }else{
                if(cb_err) cb_err(err)
            }
        };
        opt.error = function(err){
            if(cb_err) cb_err(err)
        };
        utils.requestData(opt);
    };

    /**
     * 根据产品ID获取用户
     * @param productId 产品ID 例：9100001
     */
    PlanModel.prototype.getPlanInitiaData = function(productId,cb_ok,cb_err){
        var data = {encryptedUserData:utils.userObj.id,salesPackageId:productId};
        var options = {
            url:"/ls/services/dt/planService/getPlanInitialData",
            data:JSON.stringify(data),
            type:"POST",
            dataType:"json"
        };
        options.success = function(data){
            if(data && data.status == 0){
                cb_ok && cb_ok(data);
            }else{
                var errMsg = data.errorMessages ? data.errorMessages:"数据读取失败";
                cb_err && cb_err(errMsg);
            }
        };
        options.error = cb_err;
        utils.requestData(options);
    };
    /**
     * 计算首年保费
     * @param obj
     * @param cb_ok
     * @param cb_err
     */
    PlanModel.prototype.calcFirstYearPremium = function(obj,cb_ok,cb_err){
        var options = {
            url:"/ls/services/dt/planService/calcPremium",
            data:JSON.stringify(obj),
            type:"POST",
            dataType:"json"
        };
        options.success = function(data){
            if(data && data.status == 0){
                if(data.status == 0)
                    cb_ok && cb_ok(data);
                else{
                    cb_err && cb_err(data.errorMessages);
                }
            }else{
                var errMsg = data.errorMessages ? data.errorMessages:"数据读取失败";
                cb_err && cb_err(errMsg);
            }
        };
        options.error = cb_err;
        utils.requestData(options);
    }
    /**
     * 保险计划书
     */
    PlanModel.prototype.savePlan = function(obj,cb_ok,cb_err){
        var options = {
            url:"/ls/services/dt/planService/savePlan",
            data:JSON.stringify(obj),
            type:"POST",
            dataType:"json"
        };
        options.success = function(data){
            if(data && data.status == 0){
                if(data.status == 0)
                    cb_ok && cb_ok(data);
                else{
                    cb_err && cb_err(data.errorMessages);
                }
            }else{
                var errMsg = data.errorMessages ? data.errorMessages:"生成失败";
                cb_err && cb_err(errMsg);
            }
        };
        options.error = cb_err;
        utils.requestData(options);
    }
    var planModel = new PlanModel();
    return planModel;
});