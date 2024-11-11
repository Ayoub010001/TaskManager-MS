package net.ayoub.projectservice.restClient;

import net.ayoub.projectservice.entities.Account;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "USER-SERVICE")
public interface AccountRestClient {
    @GetMapping(path = "/api/accounts/{accountId}")
    Account getAccount(@PathVariable Long accountId);

    @GetMapping(path="/api/accounts")
    List<Account> allCustomers();
}
