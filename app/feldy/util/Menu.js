Ext.define("app.feldy.util.Menu", {
    extend: 'Ext.menu.Menu',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    width: 275,
    height: 400,
    style: {
        'background-image': 'none',
        'border-color': 'transparent'
    },
    defaults: {
        xtype: 'menu',
        floating: false
    },
    iconCls: 'my-boss-icon',
    title: 'Menu Utama',
    
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [{
                    items: [{
                            text: 'Users And Groups',
                            iconCls: 'my-people-icon'
                        }, {
                            text: 'Pemasukan Harian',
                            id: 'pemasukan_harian',
                            iconCls: 'my-dollar-icon',
                            handler: function(a, b, c) {
                                // console.log(a, b, c);

                                var toolbar2 = Ext.getCmp('toolbar2');
                                if (Ext.getCmp('window1') == undefined || Ext.getCmp('window1') == null) {
                                    var window1 = Ext.create('widget.window', {
                                        title: 'Pemasukan Harian',
                                        id: 'window1',
                                        height: 200,
                                        width: 400,
                                        minimizable: true,
                                        maximizable: true,
                                        scope: this,
                                        closeAction: 'destroy',
                                        constrain: true,
                                        animateTarget : Ext.getCmp('button_child_PH'),
                                        setAnimateTarget : Ext.emptyFn,
                                        animShow : function(){
                                            this.el.fadeIn({
                                                duration: .25,
                                                callback: this.afterShow.createDelegate(this, [true], false),
                                                scope: this
                                            });
                                        },
                                        animHide : function(){
                                            if (this.el.shadow) {
                                                this.el.shadow.hide();
                                            }
                                            this.el.fadeOut({
                                                duration: .25,
                                                callback: this.afterHide,
                                                scope: this
                                            });
                                        },
                                        items: [{
                                            xtype: 'button',
                                            text: 'haloo', 
                                            id: 'btn_halo',
                                            handler: function () {
                                                Ext.Msg.show({
                                                    animateTarget: 'btn_halo',
                                                    title: 'Everyday I\'m animatin\'',
                                                    msg: 'I should have animated relative to the Ext.Button instance.<br><br>Didn\'t see? Close the dialog and try again.'
                                                });
                                            }
                                        }],
                                        listeners: {
                                            destroy: function() {
                                                var toolbar2 = Ext.getCmp('toolbar2');
                                                toolbar2.remove('button_child_PH');
                                            },
                                            hide: function(component, func) {
                                                // console.log(component);
                                                // console.log(func);
                                                // // Ext.get('pemasukan_harian').set()
                                                // // console.log("hide");
                                                // var toolbar2 = Ext.getCmp('toolbar2');
                                                // Ext.getCmp('button_child_PH').toggle();
                                                // // toolbar2.remove('button_child_PH');
                                            },
                                            minimize: function(component, func) {
                                                Ext.getCmp('button_child_PH').toggle();
                                            }
                                        }
                                    }).show();
                                } else {
                                    if (Ext.getCmp('window1').hidden) {
                                        Ext.getCmp('button_child_PH').toggle();
                                    }
                                }

                                if (Ext.getCmp('button_child_PH') == undefined || Ext.getCmp('button_child_PH') == null) {
                                    toolbar2.add({
                                        xtype: 'button',
                                        enableToggle: true,
                                        pressed: true,
                                        scope: this,
                                        id: 'button_child_PH',
                                        text: a.text,
                                        style: {
                                            border: 'solid 1px #000000'
                                        },
                                        toggleHandler: function(enable, state) {
                                            // console.log(state);
                                            var windowPH = Ext.getCmp('window1');
                                            if (state) {
                                                windowPH.show();
                                            } else {
                                                windowPH.hide();
                                            }
                                        }
                                    });
                                } else {
                                    Ext.getCmp('button_child_PH').show();
                                }
                            }
                        }, {
                            text: 'Data Warehouse',
                            id: 'data_warehouse',
                            iconCls: 'my-database-icon',
                            handler: function(a, b) {
                                var toolbar2 = Ext.getCmp('toolbar2');
                                var win ;
                                if (Ext.getCmp('button_child_DW') == undefined || Ext.getCmp('button_child_DW') == null) {
                                    toolbar2.add({
                                        xtype: 'button',
                                        enableToggle: true,
                                        pressed: true,
                                        id: 'button_child_DW',
                                        text: a.text,
                                        style: {
                                            border: 'solid 1px #000000'
                                        }
                                    });
                                } else {
                                    Ext.getCmp('button_child_DW').show();
                                }
                                Ext.create("app.feldy.controllers.master.EntriUserController").showForm();
                                // if (!win) {
                                //     win = Ext.create('widget.window', {
                                //         title: 'Layout Window',
                                //         id: 'window2',
                                //         closable: true,
                                //         closeAction: 'destroy',
                                //         width: 600,
                                //         minWidth: 350,
                                //         height: 350
                                //     });
                                // }
                                // button.dom.disabled = true;
                                // if (win.isVisible()) {
                                //     win.hide(this, function() {
                                //         // button.dom.disabled = false;
                                //     });
                                // } else {
                                //     win.show(this, function() {
                                //         // button.dom.disabled = false;
                                //     });
                                // }
                            }
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
                    items: [
                        {
                            text: 'Setting Aplications',
                            iconCls: 'my-equipment-icon'
                        }, {
                            text: 'Logout',
                            iconCls: 'my-exit-icon'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});