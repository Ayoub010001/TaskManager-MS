package net.ayoub.userservice.web;

import net.ayoub.userservice.entities.Account;
import net.ayoub.userservice.services.AccountService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AccountRestController {
    private final AccountService accountService;

    public AccountRestController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/accounts/{accountId}")
    public ResponseEntity<Account> getAccount(@PathVariable String accountId) {
        Account account = accountService.getAccountById(accountId);
        if (account == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(account);
    }

    @GetMapping("/accounts")
    public ResponseEntity<List<Account>> getAllAccount() {
        List<Account> account = accountService.getAllAccounts();
        if (account == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(account);
    }

    @PostMapping("/accounts")
    public ResponseEntity<Account> createAccount(@RequestBody Account account) {
        Account ac = accountService.createAccount(account);
        if (ac == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(ac);
    }

    @PutMapping("/accounts")
    public ResponseEntity<Account> UpdateTask(@RequestBody Account account){
        Account acc = accountService.updateAccount(account);
        if(acc == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(acc);
    }

    @DeleteMapping("/accounts/{accountId}")
    public ResponseEntity<Void> DeleteTask(@PathVariable String accountId){
        accountService.deleteAccount(accountId);
        return ResponseEntity.noContent().build();
    }

    //Context of security
    @GetMapping("/auth")
    public Authentication getAuthentication(Authentication authentication){
        return authentication;
    }

}
