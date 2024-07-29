
var layoutVue = new Vue({
    el: '#breadcrumbs',
    created() {
        this.initialBreadcrumb();
    },
    data: {
        breadcrumb: {
            path: '',
            isTest: false,
            dontShow:false,
            layer: [
                {
                    name: '首頁',
                    url: '/'
                }
            ],
        },
    },
    methods: {
        initialBreadcrumb: function () {
            let vm = this;
            let pathLayer = location.pathname.split('/');
            vm.log(pathLayer);
            let isProductDetail = vm.isProductDetail(pathLayer);
            let isBlogPostNew = vm.isBlogPostNew(pathLayer);
            let isKitchenette = vm.isKitchenette(pathLayer);

            
            if (vm.dontShow(pathLayer)) {
                vm.breadcrumb.dontShow = true;
                return;
            }

            if (isProductDetail) {
                vm.getProductDetailInfo();
            } else if (isBlogPostNew) {
                vm.getBlogInfo();
            } else if (isKitchenette) {
                vm.getKitchenetteInfo();
            } else {
                vm.getTranAndPush(pathLayer[2], 2, pathLayer);
            }


        },
        dontShow: function (pathLayer) {

            if (pathLayer[1] == "") {
                return true;
            }

            if (pathLayer[1] == "Home" && pathLayer[2] == 'Index') {
                return true;
            }

            if (pathLayer[1] == "Orders") {
                return true;
            }

            return false;
        },
        isKitchenette: function (pathLayer) {

            if (pathLayer[2] == 'Kitchenette' && parseInt(pathLayer[3]) != NaN) {
                return true;
            }
            return false;
        },
        isBlogPostNew: function (pathLayer) {

            if (pathLayer[2] == 'BlogPostNew' && parseInt(pathLayer[3]) != NaN) {
                return true;
            }
            return false;
        },
        isProductDetail: function (pathLayer) {

            if (pathLayer[2] == 'ItemDetail' && parseInt(pathLayer[3]) != NaN) {
                return true;
            }
            return false;
        },
        getBlogInfo: function () {
            var vm = this;
            let secondLayer = {
                name: '部落格',
                url: '/Home/BlogNew'
            };
            let thirdLayrer = {
                name: vm.getPageTitle(),
                url: location.pathname
            };
            vm.breadcrumb.layer.push(secondLayer);
            vm.breadcrumb.layer.push(thirdLayrer);
        },
        getKitchenetteInfo: function () {
            var vm = this;
            vm.breadcrumb.layer[0].url = '/BabyFood/Index';
            let secondLayer = {
                name: '副食品菜單',
                url: '/Products/Kitchenette'
            };

            //let translate = vm.getTranslate('Kitchenette');

            //if (translate != null) {
            //    secondLayer.name = translate;
            //}

            vm.breadcrumb.layer.push(secondLayer);
        },
        getProductDetailInfo: function () {
            var vm = this;
            let secondLayer = {
                name: $('#categoryInfo').text(),
                url: $('#categoryInfo').attr('href')
            };
            let thirdLayrer = {
                name: vm.getPageTitle(),
                url: location.pathname
            };
            vm.breadcrumb.layer.push(secondLayer);
            vm.breadcrumb.layer.push(thirdLayrer);
        },
        getTranAndPush: function (name, layer, pathLayer) {
            let vm = this;
            let model = {
                key: name,
                value: '',
            }
            let newLayer = {
                name: '',
                url: '/'
            }
            var newInfoJson = JSON.stringify(model);
            axios.post('/Gox/Setting/breadCrumbApi', {
                instruction: 'searchBreadcrumb',
                json: newInfoJson,
            }).then(res => {
                vm.log(res);

                if (res.data != '' && res.data != undefined) {//有資料
                    newLayer.name = res.data.Value;
                    if (layer = 2) {
                        newLayer.url = location.pathname;
                    }
                } else {//無資料
                    newLayer.name = vm.getPageTitle();
                }

                vm.breadcrumb.layer.push(newLayer);
                vm.log(vm.breadcrumb.layer);
                vm.cuzProcess(pathLayer);
            })
        },
        //getTranslate: function (name) {
        //    let vm = this;
        //    let model = {
        //        key: name,
        //        value: '',
        //    }
        //    var newInfoJson = JSON.stringify(model);
        //    axios.post('/Gox/Setting/breadCrumbApi', {
        //        instruction: 'searchBreadcrumb',
        //        json: newInfoJson,
        //    }).then(res => {
        //        vm.log(res);

        //        if (res.data != '' && res.data != undefined) {//有資料

        //            return res.data.Value;
        //        } else {//無資料

        //            return null;
        //        }

        //    })
        //},
        cuzProcess: function (pathLayer) {
            var vm = this;
            if (pathLayer[2] == "FrozenFood") {
                vm.breadcrumb.layer[1].name = $($('.special-tab-selected')[0]).text();
                vm.breadcrumb.layer[1].url = location.pathname + location.search;
                //let newLayer = {
                //    name: $('.special-tab-selected').text(),
                //    url: location.pathname + location.search,
                //}
                //vm.breadcrumb.layer.push(newLayer);
            }
        },
        getPageTitle: function () {
            return document.title.replace('｜無毒農 - 友善環境的安心水果', '');
        },
        log: function (str) {
            if (this.breadcrumb.isTest) {
                console.log(str)
            }
        },
    }
});

//var bubbleGame = new Vue({
//    el: '#bubbleGame',
//    created() {

//        var vm = this;
//        setTimeout(function () {

//            $('#tea-bubble img').hover(function () {

//                $(this).removeClass('jello')
//                $(this).addClass('pulse')
//            }, function () {
//                $(this).removeClass('pulse')
//                $(this).addClass('jello')
//            });

//            vm.cLog('hi vue');
//            vm.volId = $('#volId').val();
//            vm.cLog(vm.volId);
//            if (vm.volId != undefined) {
//                vm.checkIsPlay();
//            } else {
//                vm.isPlay = false;
//                vm.setTeaBubblePos();
//            }
//            vm.cLog('checkIsPlay');
         
//        }, 1000);

//    },
//    data: {
//        loginModel: {
//            UserName: '',
//            Password: '',
//            RememberMe: false,
//            FBMessageID: '',
//        },
//        volId: -1,
//        state: '',
//        isPlay: true,
//        isLogin: false,
//        isTest: true,
//    },
//    methods: {
//        login: function () {
//            var vm = this;
//            var newJson = JSON.stringify(vm.loginModel); 
//            console.log(newJson);
//            axios.post('/Login/LoginPost',
//                {
//                    json: newJson,
//                }).then(res => {
//                    vm.cLog(res);
//                    if (res.data.msg == "登入成功") {
//                        vm.isLogin = true;
//                        vm.volId = res.data.account.Id;
//                        vm.cLog(res.data.account.Id);
//                        vm.foundTea();
//                    } else if (res.data.result == "帳號或密碼不正確。") {
//                        alert(res.data.result);
//                    }
                    
//                })
//        },
//        hrefFilter: function () {
//            let href = location.href;
//            let filter = ['order', 'Order', 'baby', 'Baby'];

//            let filterResult = filter.find(function (item) {
//                if (href.indexOf(item) != -1) {
//                    return true;
//                } else {
//                    return false;
//                }
//            });

//            return filterResult;
//        },
//        checkIsPlay: function () {
//            var vm = this;
//            if (vm.volId == undefined) {
//                $('#tea-bubble').show();
//                return;
//            }

//            var formData = new FormData();
//            formData.append("volId", vm.volId);
//            $.ajax({
//                async: true,
//                contentType: false,
//                processData: false,
//                url: "/Activity/GetBubbleTeaIsPlay",
//                type: 'post',
//                data: formData,

//                beforeSend: function () {
//                },
//                complete: function () {
//                    $.unblockUI();
//                },
//                success: function (data) {
//                    this.checkIsPlay = data.result;
//                    if (!this.checkIsPlay) {
//                        vm.setTeaBubblePos();
//                        vm.cLog('setTeaBubblePos');
//                        if (vm.volId != undefined) {
//                            vm.isLogin = true;
//                        }
//                    }
//                },
//                error: function () {
//                }
//            });
//        },
//        foundTea: function () {
//            //var click = 0;
//            $('#tea-bubble').css('transition', '.2s')
//            $('#tea-bubble').css('padding', '0px')
//            $('#tea-bubble').css('opacity', '0')

//            var vm = this;
//            if (!vm.isLogin) {

//                vm.state = '顯示登入表單'
//                vm.cLog('顯示登入表單');
//                $('#bubble-login-modal').fadeIn();
//                $('#bubble-login-modal').modal('show');

//                return;
//            }

//            //if (click != 0) {
//            //    return;
//            //}
//            //click++;

//            var formData = new FormData();
//            formData.append("volId", vm.volId);
//            $.ajax({
//                async: true,
//                contentType: false,
//                processData: false,
//                url: "/Activity/GetBubbleTeaPrized",
//                type: 'post',
//                data: formData,

//                beforeSend: function () {
//                    //$.blockUI({ message: "處理中，請稍後.." });
//                },
//                complete: function () {
//                    $.unblockUI();
//                },
//                success: function (data) {
//                    vm.cLog('foundTea=' + data);
//                    if (data != -1) {
//                        switch (data) {
//                            case 1:
//                                vm.state = '五元購物金';
//                                break;
//                            case 3:
//                                vm.state = '九折優惠';
//                                break;
//                            case 4:
//                                vm.state = '茶包組';
//                                break;
//                        }

//                        vm.displayModelByName('bubble-login-modal');
//                    } else {
//                        alert("您今天已經玩過囉!");
//                        vm.closeModelByName('bubble-login-modal');
//                    }
//                },
//                error: function () {
//                }
//            });

//        },
//        setTeaBubblePos: function () {

//            if (this.hrefFilter() != undefined) {
//                return;
//            }

//            var x = getRandom(5, 94);
//            var y = getRandom(5, 94);
//            $('#tea-bubble').css('top', y + '%');
//            $('#tea-bubble').css('left', x + '%');
//            $('#tea-bubble').show();
//        },
//        getRandom: function () {
//            return Math.floor(Math.random() * (max - min + 1)) + min;
//        },
//        cLog: function (str) {
//            if (this.isTest) {
//                console.log(str)
//            }
//        },
//        displayModelByName: function (name) {
//            $('#' + name).fadeIn();
//            $('#' + name).modal('show');
//        },
//        closeModelByName: function (name) {
//            $('#' + name).fadeOut();
//            $('#' + name).modal('hide');
//        },
//    }
//});