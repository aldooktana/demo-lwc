({
    doInit: function(component, event, helper) {
		var action = component.get("c.getAccounts");
		action.setCallback(this, function(response){
			var state = response.getState();
			if(state === "SUCCESS") {
                component.set("v.showAccounts", response.getReturnValue());
                component.set("v.accounts", response.getReturnValue());
			}
		});
		$A.enqueueAction(action);
    },
    refreshResults : function(component, event, helper) {
        var accounts = component.get("v.accounts");
        var queryTerm = component.find('enter-search').get('v.value');
        component.set("v.showAccounts", accounts.filter(acc => acc.Name.toLocaleLowerCase().includes(queryTerm.toLocaleLowerCase())));
    }
})