Ext.define("app.feldy.util.MenuRightClick", {
	extend: 'Ext.menu.Menu',
	id: 'menuRightClick',
	alias: 'widget.menuKlikKanan',
	autoHeight : true,

	initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
        	items: [{
        		text: 'test 1'
        	}, {
        		text: 'test 2'
        	}]
        });
        me.callParent(arguments);
    }
});