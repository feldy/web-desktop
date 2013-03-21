Ext.define("app.feldy.util.StatusBar", {
	extend: 'Ext.toolbar.Toolbar',
	id: 'mainMenu',

	initComponent: function() {
        var me = this;
        var menu = Ext.create('app.feldy.util.Menu');
        Ext.applyIf(me, {
            items: [
                {
					xtype: 'button',
					id: 'btnStart',
					text: 'Start',
					iconCls: 'my-alien-icon',
					arrowCls: '',
					menu: menu
				}, '-', {
					xtype: 'button',
					iconCls: 'my-cd-icon'
				}, {
					xtype: 'button',
					iconCls: 'my-copy-icon'
				}, {
					xtype: 'button',
					iconCls: 'my-folder-icon'
				},'-', 
				{
					xtype: 'toolbar',
					id: 'toolbar2',
					enableOverflow: true,
					border: 'none',
					width: 1000,
					height: 26
				},
				'->', '-',
					{
					xtype: 'label',
					id: 'label_jam',
					padding: '0 0 10 0',
					width: 50,
					listeners: {
		                afterrender: {
		                    fn: me.onLabelAfterRender,
		                    scope: me
		                }
		            }
				}
            ]
        });

        me.callParent(arguments);
    },
    onLabelAfterRender: function(abstractcomponent, options) {
        var time  = function(){
	    	var lblJam = Ext.get('label_jam');
	    	lblJam.setHTML(Ext.Date.format(new Date(), 'H:i:s'));
	    	setTimeout(time, 1000);
	    }
	    time();
    }
});