Ext.define("app.feldy.util.Menu", {
    extend: 'Ext.menu.Menu',
    title: 'Menu Utama',
    width: 275,
    height: 400,
    iconCls: 'my-boss-icon',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    style: {
        'background-image': 'none',
        'border-color': 'transparent'
    },
    defaults: {
        xtype: 'menu',
        floating: false
    },
    initComponent: function() {
        var me = this;
        // call all form from database
        this.getListFormFromDatabase();
        Ext.applyIf(me, {
            listeners: {
                beforehide: {
                    fn: function(){
                        // console.log('ss');
                    },
                    scope: me
                }
            },
            items: [{
                items: [{
                        text: 'Users And Groups',
                        iconCls: 'my-people-icon',
                        handler: function(item, object){
                            // Ext.create("app.feldy.controllers.master.EntriUserController").showForm();
                        }
                    }, {
                        text: 'Pemasukan Pegawai',
                        // id: 'pemasukan_harian',
                        iconCls: 'my-dollar-icon',
                        handler: function(item, object){
                            // Ext.create("app.feldy.controllers.master.EntriPegawaiController").showForm();
                        }
                    }, {
                        text: 'Data Warehouse',
                        // id: 'data_warehouse',
                        iconCls: 'my-database-icon'
                    }, '-', {
                        text: 'All Programs',
                        id: 'menuAllPrograms',
                        iconCls: 'my-home-icon',
                        menu: {
                            xtype: 'menu',
                            id: 'menuAllForm',
                            defaults: {
                                iconCls: 'my-text-icon'  
                            }
                        }
                    }
                ]
            }, {
                defaults: {
                    style: {
                        'background-color': '#efefef'
                    }
                },
                items: [{
                        text: 'Setting Aplications',
                        iconCls: 'my-equipment-icon'
                    }, {
                        text: 'Logout',
                        iconCls: 'my-exit-icon'
                    }]
            }]
        });
        me.callParent(arguments);
    },
    getListFormFromDatabase: function(){
        var parameter = { 'userUUID' : "96c320bd-95e7-11e2-97ca-78e3b56dff7a" };
        Ext.Ajax.request({
            url: 'core/getData.php',
            method: "GET",
            params: parameter,
            success: function(data){
                var objResult = Ext.decode(data.responseText);
                var menuAllForm = Ext.getCmp('menuAllForm');
                var listOfObj = [];
               
                for(var i = 0; i < objResult.length; i++){
                    listOfObj[i] = {
                        'text'               : objResult[i].title_form,
                        'package_controller' : objResult[i].package_controller,
                        'controller'         : objResult[i].controller_name,
                        'handler'            : function(items, event){
                            var locationControllers = "app.feldy.controllers."+items.package_controller+"."+items.controller;
                            Ext.create(locationControllers).showForm();
                        }
                    };
                }
                menuAllForm.add(listOfObj);
            },
            failure: function(error){
                console.log('error ->', error);
            }
        });
    }
});