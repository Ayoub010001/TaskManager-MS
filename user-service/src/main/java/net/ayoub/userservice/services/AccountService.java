package net.ayoub.userservice.services;

import net.ayoub.userservice.entities.Account;

import java.util.List;

public interface AccountService {
    Account getAccountById(String accountId);
    List<Account> getAllAccounts();

    Account createAccount(Account account);
    Account updateAccount(Account account);
    void deleteAccount(String accountId);
}
