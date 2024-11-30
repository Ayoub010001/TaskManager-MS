package net.ayoub.userservice.web;

import net.ayoub.userservice.entities.Account;
import net.ayoub.userservice.services.AccountService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AccountRestController {
    private AccountService accountService;

    public AccountRestController(AccountService accountService) {
        this.accountService = accountService;
    }
    @GetMapping("/accounts/{accountId}")
    public ResponseEntity<Account> getAccount(@PathVariable Long accountId){
        Account account = accountService.getAccountById(accountId);
        if(account == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(account);
    }
    @GetMapping("/accounts")
    public ResponseEntity<List<Account>> getAllAccount(){
        List<Account> account = accountService.getAllAccounts();
        if(account == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(account);
    }
    //Context of security
    @GetMapping("/auth")
    public Authentication getAuthentication(Authentication authentication){
        return authentication;
    }
}
