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
        Ext.applyIf(me, {
            items: [{
                items: [{
                        text: 'Users And Groups',
                        iconCls: 'my-people-icon',
                        handler: function(item, object){
                            Ext.create("app.feldy.controllers.master.EntriUserController").showForm();
                        }
                    }, {
                        text: 'Pemasukan Pegawai',
                        // id: 'pemasukan_harian',
                        iconCls: 'my-dollar-icon',
                        handler: function(item, object){
                            Ext.create("app.feldy.controllers.master.EntriPegawaiController").showForm();
                        }
                    }, {
                        text: 'Data Warehouse',
                        // id: 'data_warehouse',
                        iconCls: 'my-database-icon'
                    }, '-', {
                        text: 'All Programs',
                        iconCls: 'my-home-icon',
                        menu: {
                            xtype: 'menu',
                            items: [{
                                text: 'Manage Password',
                                iconCls: 'my-key-icon'
                            }]
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
    }
});