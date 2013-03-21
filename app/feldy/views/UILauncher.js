Ext.define("app.feldy.views.UILauncher", {
	extend: 'Ext.Viewport',
	id:'panel-utama',
    baseCls:'x-plain',
    renderTo: 'author',
    layout: 'border',
    defaults: {
        collapsible: false,
	    split: false
    },
    initComponent: function() {
        var me = this;
        var statusBar = Ext.create('app.feldy.util.StatusBar');
        Ext.applyIf(me, {
        	items: [{
        		region: 'center',
                id: 'super-panel'
                // items: [{
                //     xtype: 'panel',
                //     id: 'super-panel',
                //     style: {
                //         'border': 'none'
                //     }
                // }]
        	}, {
        		region:'south',
		    	items: [statusBar]
        	}]
        });
        me.callParent(arguments);
    }
})