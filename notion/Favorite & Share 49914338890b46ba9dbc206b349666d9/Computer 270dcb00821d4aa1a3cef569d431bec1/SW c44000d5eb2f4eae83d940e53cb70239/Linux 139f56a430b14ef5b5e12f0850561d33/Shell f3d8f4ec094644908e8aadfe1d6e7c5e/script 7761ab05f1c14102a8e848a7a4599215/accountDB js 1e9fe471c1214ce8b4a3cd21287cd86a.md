# accountDB.js

```jsx
accountDB.js 
'use strict';

const async = require('async');

const moment = require('moment');

const url_parser = require('url');

const AWS = require('aws-sdk');

/* error code

 * 500 DB server error

 * 407 Invalid Parameters

 * 408 Method not supported

 * 411 Account doesn't exist

 * 412 New account already existed

 * 413 DB update error

 */

/**

 * Rules to generate site info

 * 1. if given 'site' info isn't from the 'auto' rule, save it as given.

 * 2. if the given 'site' info follows the 'auto' rule, revise the 'site' to

 *   2.1 mp? -> change site set to 'wwww'

 *   2.2 cn? -> change domain to 'mydlink.net.cn'

 *   2.3 qa? -> set stage to 'qa'

 *   -> generate target url: https://<site><stage>.<domain>

 */

//initial global variable

var dynamo = new AWS.DynamoDB.DocumentClient();

var tableName = "accountdb";

var response = null;

exports.handler = (event, context, callback) => {

    if(typeof event.pathParameters.action === "undefined" || event.pathParameters.action === "" || event.pathParameters.action === null){    //no action

        async.waterfall([

            async.apply(setResponse, 408, "Method not supported", null)

        ], function(err, result){

            if(err){

                console.log(err)

            }

            callback(null, {"statusCode": response.code, "body": JSON.stringify(response)});

        });

    }else if(typeof event.queryStringParameters.account === "undefined" || event.queryStringParameters.account === "" || event.pathParameters.action === null){    //no account data

        async.waterfall([

            async.apply(setResponse, 407, "Invalid Parameters", null)

        ], function(err, result){

            if(err){

                console.log(err)

            }

            callback(null, {"statusCode": response.code, "body": JSON.stringify(response)});

        });

    }else{

        //set params from api, account & site & new_account should be in lowercase.

        var account = (event.queryStringParameters.account).toLowerCase().trim();

        var site = (typeof event.queryStringParameters.site === "undefined" || event.queryStringParameters.site === "") ? null : event.queryStringParameters.site.toLowerCase();

        var new_account = (typeof event.queryStringParameters.new_account === "undefined" || event.queryStringParameters.new_account === "") ? null : event.queryStringParameters.new_account.toLowerCase().trim();

        var region = (typeof event.queryStringParameters.md_site === "undefined" || event.queryStringParameters.md_site === "") ? false : event.queryStringParameters.md_site.toLowerCase();

        //main, do CRUD by action

        switch (event.pathParameters.action) {

            case 'query':

                async.waterfall([

                    async.apply(queryAccount,account)

                ], function(err, result){

                    if(err){

                        console.log(err)

                    }

                    callback(null, {"statusCode": response.code, "body": JSON.stringify(response)});

                });

                break;

            case 'create':

                var array = [];

                if(site){

                    async.waterfall([

                        async.apply(queryAccount, account)

                    ], function(err, result){

                        if(err){

                            console.log(err)

                        }

                        if(typeof result !== "undefined"){   //query success

                            if(result['account'] === undefined){    //no data in DDB

                                async.waterfall([

                                    async.apply(createAccount, account, site, region)

                                ], function(err, result){

                                    if(err){

                                        console.log(err)

                                    }

                                    callback(null, {"statusCode": response.code, "body": JSON.stringify(response)});

                                });

                            }else{  //data already exist

                                array['message'] = "Account already existed";

                                async.waterfall([

                                    async.apply(setResponse, 410, "Execution Error", array)

                                ], function(err, result){

                                    if(err){

                                        console.log(err)

                                    }

                                    callback(null, {"statusCode": response.code, "body": JSON.stringify(response)});

                                });

                            }

                        }else{  //query fail

                            callback(null, {"statusCode": response.code, "body": JSON.stringify(response)});

                        }

                    });

                }else{

                    async.waterfall([

                        async.apply(setResponse, 407, "Invalid Parameters", null)

                    ], function(err, result){

                        if(err){

                            console.log(err)

                        }

                        callback(null, {"statusCode": response.code, "body": JSON.stringify(response)});

                    });

                }

                break;

            case 'update':

                var array = [];

                async.waterfall([

                    async.apply(queryAccount, account),

                ], function(err, result){

                    if(err){

                        console.log(err)

                    }

                    if(typeof result !== "undefined" && result['account'] !== undefined){    //DDB has this account

                        var old_data = result;

                        if(new_account){

                            async.waterfall([

                                async.apply(queryAccount, new_account)

                            ], function(err, result){

                                if(err){

                                    console.log(err)

                                }

                                if(typeof result !== "undefined" && result['account'] === undefined){    //DDB doesn't has this new account, do update

                                    async.waterfall([

                                        async.apply(updateAccount, account, new_account, site, old_data)

                                    ], function(err, result){

                                        if(err){

                                            console.log(err)

                                        }

                                        callback(null, {"statusCode": response.code, "body": JSON.stringify(response)});

                                    });

                                }else{  //DDB has this new account

                                    array['message'] = "New account already existed";

                                    async.waterfall([

                                        async.apply(setResponse, 412, "Execution Error", array)

                                    ], function(err, result){

                                        if(err){

                                            console.log(err)

                                        }

                                        callback(null, {"statusCode": response.code, "body": JSON.stringify(response)});

                                    });

                                }

                            });

                        }else if(site){

                            async.waterfall([

                                async.apply(updateAccount, account, new_account, site, old_data)

                            ], function(err, result){

                                if(err){

                                    console.log(err)

                                }

                                callback(null, {"statusCode": response.code, "body": JSON.stringify(response)});

                            });

                        }else{

                            async.waterfall([

                                async.apply(setResponse, 407, "Invalid Parameters", null)

                            ], function(err, result){

                                if(err){

                                    console.log(err)

                                }

                                callback(null, {"statusCode": response.code, "body": JSON.stringify(response)});

                            });

                        }

                    }else{  //DDB doesn't has this account

                        callback(null, {"statusCode": response.code, "body": JSON.stringify(response)});

                    }

                });

                break;

            case 'delete':

                async.waterfall([

                    async.apply(queryAccount,account)

                ], function(err, result){

                    if(err){

                        console.log(err)

                    }

                    if(typeof result !== "undefined" && result['account'] !== undefined){  //db has this account, delete account

                        async.waterfall([

                            async.apply(deleteAccount, account)

                        ],

                        function(err, result){

                            if(err){

                                console.log(err)

                            }

                            callback(null, {"statusCode": response.code, "body": JSON.stringify(response)});

                        });

                    }else{

                        callback(null, {"statusCode": response.code, "body": JSON.stringify(response)});

                    }

                });

                break;

            default:

                async.waterfall([

                    async.apply(setResponse, 408, "Method not supported", null)

                ],

                function(err, result){

                    if(err){

                        console.log(err)

                    }

                    callback(null, {"statusCode": response.code, "body": JSON.stringify(response)});

                });

        }

    }

}

//query success -> dbData, fail -> undefined

function queryAccount(account, callback){

    //set params

    var array =[];

    var params = {

        TableName : tableName,

        ProjectionExpression:"account, site, md_site, create_at, update_at",   //column name from DDB

        KeyConditionExpression: "account = :ac",    //provide a specific value for partition key

        ExpressionAttributeValues: {    //transform vaule in KeyConditionExpression

            ":ac": account

        }

    };

    //query DDB

    try{

        dynamo.query(params, function(err, data) {

            if (err) {

                console.log(err)

                async.waterfall([

                    async.apply(setResponse, 411, "Execution Error", err.message)

                ], function(err, result){

                    if(err){

                        console.log(err)

                    }

                    callback(null);

                });

            } else {

                var dbData =[];

                if(data.Items[0]){

                    dbData['account'] = data.Items[0].account;

                    dbData['site'   ] = data.Items[0].site;

                    dbData['md_site'] = data.Items[0].md_site;

                    dbData['create_at'] = data.Items[0].create_at;

                    dbData['update_at'] = data.Items[0].update_at;

                    //md_site is empty

                    if(!dbData['md_site']){

                        dbData['md_site'] = getSiteInfoByURL(dbData['site'],true);

                    }

                }

                if(typeof dbData['account'] !== "undefined"){   //DDB has data

                    array['site']      = dbData['site'];

                    array['md_site']   = dbData['md_site'];

                    array['create_at'] = dbData['create_at'];

                    async.waterfall([

                        async.apply(setResponse, 200, "Success", array)

                    ], function(err, result){

                        if(err){

                            console.log(err)

                        }

                        callback(null,dbData);

                    });

                }else{   //DDB no data

                    array['message'] = "Account doesn't exist";

                    async.waterfall([

                        async.apply(setResponse, 411, "Execution Error", array)

                    ], function(err, result){

                        if(err){

                            console.log(err)

                        }

                        callback(null, dbData);

                    });

                }

            }

        });

    }catch(err){

        console.log(err)

        array['message'] = err.message;

        async.waterfall([

            async.apply(setResponse, 500, "Server Error", array)

        ], function(err, result){

            if(err){

                console.log(err)

            }

            callback(null);

        });

    }

}

function deleteAccount(account, callback){

    //set params

    var array = [];

    var params = {

        TableName:tableName,

        Key:{

            "account": account

        }

    };

    //delete DDB

    dynamo.delete(params, function(err, data) {

        if (err) {

            console.log(err)

            array['message'] = "Delete account fail";

            async.waterfall([

                async.apply(setResponse, 413, "Execution Error", array)

            ], function(err, result){

                if(err){

                    console.log(err)

                }

                callback(null);

            });

        } else {

            async.waterfall([

                async.apply(setResponse, 200, "Success", null)

            ], function(err, result){

                if(err){

                    console.log(err)

                }

                callback(null);

            });

        }

    });

}

function createAccount(account, site, region, callback){

    /**

    * - if the given site name follow new rule, converting to customer readible one

    * - else, try to parse and put what it gives.

    */

    var array = [];

    async.parallel([

        function(callback){

            if(region === "" || region === false){

                // derive region from site

                region = getSiteInfoByURL(site, true);

            }

            callback(null,region);

        },

        function(callback){

            var host = url_parser.parse(site.toLowerCase()).host;

            if(host === "cn.mydlink.com"){

                site = "https://www.mydlink.net.cn";

            }

            callback(null,host);

        }

    ], function(err,result){

        if(err){

            console.log(err)

            array['message'] = err.message;

            async.waterfall([

                async.apply(setResponse, 407, "Execution Error", array)

            ], function(err, result){

                if(err){

                    console.log(err)

                }

                callback(null);

            });

        }else{

            if(region !== false && /^(mp|qa|rd)-[a-z0-9]+-/i.test(result[1]) === true){

                // conver to customer readible one if possible

                var f_region = region.split("-",2);

                var f_env = f_region[0];

                var f_site = f_region[1];

                if(f_env && f_site){

                    // special cases:

                    // - for cn site, base set to mydlink.net.cn

                    // - for mp-us or mp-cn -> site = www.

                    var base = (f_site !== "cn") ? "mydlink.com" : "mydlink.net.cn";

                    if(f_env === "mp" && (f_site === "us" || f_site === "cn")){

                        f_site = "www";

                    }

                    f_env = (f_env === "qa") ? "qa" : "";

                    site = "https://" + f_site + f_env + "." + base;

                }

            }

            //set params

            var lastModify = Date.now();

            var currentTime = moment(lastModify).format('YYYY-MM-DD HH:mm:ss.SSSSSS');

            var params = {

                TableName:tableName,

                Item:{ "account": account,

                       "site": site,

                       "md_site": region,

                       "create_at": currentTime

                },

                ReturnValues: 'ALL_OLD'

            };

            //create DDB data

            dynamo.put(params, function(err, data) {

                if (err) {

                    console.log(err)

                    array['message'] = err.message;

                    async.waterfall([

                        async.apply(setResponse, 413, "Execution Error", array)

                    ], function(err, result){

                        callback(null);

                    });

                } else {

                    async.waterfall([

                        async.apply(setResponse, 200, "Success", null)

                    ], function(err, result){

                        if(err){

                            console.log(err)

                        }

                        callback(null);

                    });

                }

            });

        }

    });

}

function updateAccount(account, new_account, site, old_data, callback){

    //params

    var array = [];

    var lastModify = Date.now();

    var currentTime = moment(lastModify).format('YYYY-MM-DD HH:mm:ss.SSSSSS');

    var params = {

        TableName:tableName,

        Item:{ "account": (new_account ? new_account : account),

               "site": (site ? site : old_data['site']),

               "md_site": old_data['md_site'],

               "create_at": old_data['create_at'],

               "update_at": currentTime

        },

        ReturnValues: 'ALL_OLD'

    };

    //create DDB data

    dynamo.put(params, function(err, data) {

        if (err) {

            console.log(err)

            array['message'] = result['Update new account fail'];

            async.waterfall([

                async.apply(setResponse, 413, "Execution Error", array)

            ], function(err, result){

                if(err){

                    console.log(err)

                }

                callback(null);

            });

        }

        else {

            async.waterfall([

                async.apply(setResponse, 200, "Success", null)

            ],

            function(err, result){

                if(err){

                    console.log(err)

                }

                //delete old Account

                if(new_account){

                    async.waterfall([

                        async.apply(deleteAccount, account)

                    ], function(err, result){

                        if(err){

                            console.log(err)

                        }

                        callback(null);

                    });

                }

                else{

                    callback(null);

                }

            });

        }

    });

}

function getSiteInfoByURL(url, toStr){

    if(!url){

        return false;

    }

    var env = "";

    var site = "";

    var url = (url.toLowerCase().indexOf("http")!== -1 ? url : "https://"+url);

    var host = url_parser.parse(url.toLowerCase()).host;

    var items = host.split(".");

    if(items[0]===""){

        return false;

    }

    if(items[0].indexOf("-")=== -1){

        // ugly, no general rule to parse site & env info.

        env = "mp";

        site = items[0];

        if(items[0]=="www"){

            site = (items[items.length-1]==='cn') ? 'cn' : 'us';

        }

        if(/^[a-z0-9]+qa$/i.test(site)===true){

            env = "qa";

            site = site.substr(0,site.length-2);

        }else if(/^v[0-9]+$/i.test(site)===true){

            env = "rd";

        }

    }else{

        // new format: <stage>-<site>-<role>

        var its = items[0].split("-");

        if(its.length>=3){

            env = its[0];

            site = its[1];

        }

    }

    return ((env === "" || site === "") ? false : (toStr ? env + "-" + site : [env,site]));

}

function setResponse(code, type, data, callback){

    response = {};

    response['code'] = code;

    response['type'] = type;

    for(var index in data){

        response[index] = data[index];

    }

    callback(null);

}
```