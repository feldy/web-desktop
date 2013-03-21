Ext.define("app.feldy.controllers.master.EntriPegawaiController", {
	//inisialisasi variable
	windowEntriPegawai: null,
	title: "Pegawai Panel",

	constructor: function() {
		this.initComponent();
	},
    initComponent: function() {
    	var toolbar2 = Ext.getCmp('toolbar2');
    	if (Ext.getCmp('buttonEntriPegawai') == undefined || Ext.getCmp('buttonEntriPegawai') == null) {
            toolbar2.add({
                xtype: 'button',
                enableToggle: true,
                pressed: true,
                scope: this,
                iconCls: 'my-display16x16-icon',
                id: 'buttonEntriPegawai',
                text: this.title,
                style: {
                    border: 'solid 1px #000000'
                },
                toggleHandler: function(enable, state) {
                    var windowEntriPegawai = Ext.getCmp('windowEntriPegawai');
                    if (state) {
                        windowEntriPegawai.show();
                    } else {
                        windowEntriPegawai.hide();
                    }
                }
            });
        } else {
            Ext.getCmp('buttonEntriPegawai').show();
        }

		if (Ext.getCmp('windowEntriPegawai') == undefined || Ext.getCmp('windowEntriPegawai') == null) {
			this.windowEntriPegawai = Ext.create("widget.window", {
				title: this.title,
	            closeAction: 'destroy',
	            closable: true,
                iconCls: 'my-display16x16-icon',
				id: 'windowEntriPegawai',
				animateTarget : 'buttonEntriPegawai',
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
	                    toolbar2.remove('buttonEntriPegawai');
	                },
	                hide: function(component, func) {

	                },
	                minimize: function(component, func) {
	                    Ext.getCmp('buttonEntriPegawai').toggle();
	                }
	            }
			});
            Ext.getCmp("super-panel").add(this.windowEntriPegawai);
		}
    }, 
	itemComponent: function(){
    	
    },
    showForm: function(){
    	var form = Ext.getCmp('windowEntriPegawai');
        if (Ext.getCmp('windowEntriPegawai').hidden &&  !Ext.getCmp('buttonEntriPegawai').pressed) {
            Ext.getCmp('buttonEntriPegawai').toggle();
        } else {
            form.show();
        }
    }
});