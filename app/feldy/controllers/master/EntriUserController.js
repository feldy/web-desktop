Ext.define("app.feldy.controllers.master.EntriUserController", {
	//inisialisasi variable
	windowEntriUser: null,
	title: "User Window",

	constructor: function() {
		this.initComponent();
	},

    initComponent: function() {
    	var toolbar2 = Ext.getCmp('toolbar2');
    	if (Ext.getCmp('buttonEntriUser') == undefined || Ext.getCmp('buttonEntriUser') == null) {
            toolbar2.add({
                xtype: 'button',
                enableToggle: true,
                pressed: true,
                scope: this,
                id: 'buttonEntriUser',
                text: this.title,
                style: {
                    border: 'solid 1px #000000'
                },
                toggleHandler: function(enable, state) {
                    var windowEntriUser = Ext.getCmp('windowEntriUser');
                    if (state) {
                        windowEntriUser.show();
                    } else {
                        windowEntriUser.hide();
                    }
                }
            });
        } else {
            Ext.getCmp('buttonEntriUser').show();
        }

		if (Ext.getCmp('windowEntriUser') == undefined || Ext.getCmp('windowEntriUser') == null) {
			this.windowEntriUser = Ext.create("widget.window", {
				title: this.title,
	            closeAction: 'destroy',
	            closable: true,
				id: 'windowEntriUser',
				animateTarget : 'buttonEntriUser',
	            height: 350,
	            width: 600,
	            minWidth: 350,
	            minimizable: true,
                maximizable: true,
                scope: this,
                constrain: true,
	            listeners: {
	                destroy: function() {
	                    var toolbar2 = Ext.getCmp('toolbar2');
	                    toolbar2.remove('buttonEntriUser');
	                },
	                hide: function(component, func) {

	                },
	                minimize: function(component, func) {
	                    Ext.getCmp('buttonEntriUser').toggle();
	                }
	            }
			});
		}
    }, 
    itemComponent: function(){

    },
    showForm: function(){
    	var form = Ext.getCmp('windowEntriUser');
    	form.show();
    }
});