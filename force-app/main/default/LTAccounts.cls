public with sharing class LTAccounts {
    @AuraEnabled
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, PhotoUrl FROM Account];
    }
}