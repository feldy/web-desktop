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
                iconCls: 'my-display16x16-icon',
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
                // contentEl: 'main-panel-bgt',
	            closeAction: 'destroy',
                iconCls: 'my-display16x16-icon',
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
            Ext.getCmp("super-panel").add(this.windowEntriUser);
		}
    }, 
    itemComponent: function(){

    },
    showForm: function(){
    	var form = Ext.getCmp('windowEntriUser');
    	if (Ext.getCmp('windowEntriUser').hidden &&  !Ext.getCmp('buttonEntriUser').pressed) {
            Ext.getCmp('buttonEntriUser').toggle();
        } else {
    		form.show();
        }
    }
});