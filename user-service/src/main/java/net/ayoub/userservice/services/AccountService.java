package net.ayoub.userservice.services;

import net.ayoub.userservice.entities.Account;

import java.util.List;

public interface AccountService {
    Account getAccountById(Long accountId);
    List<Account> getAllAccounts();
}
