
## On-chain System of Record with Public Notary

## Overview

We use Internet Computers following advantages to make a cheap and scalable System of Record with Public Notary:

1. Low Cost of on-chain data storage

1. Async inter-canister calls for scalability and lower latency

Then develop more features on that:

1. Oracle (real world measures through API)

1. Reveal Share feature with selective Decryption key sharing

1. Billing

## Deploy Instructions

1. Start a local internet computer.

   ```text
   dfx start
   ```

1. Open a new terminal window.

1. Reserve an identifier for your canister.

   ```text
   dfx canister create --all 
   ```

1. Build your canister.

   ```text
   dfx build
   ```

1. Deploy your canister.

   ```text
   dfx canister install --all
   ```

1. Subscribe to the `"Apples"` topic.

   ```text
   dfx canister call subscriber init '("BTC-PRICE-AT-COINBASE")'
   ```

1. Publish to the `"Apples"` topic.

   ```text
   dfx canister call notary publish '(record { "topic" = "BTC-PRICE-AT-COINBASE"; "value" = 21000 })'
   ```

1. Receive your subscription.

   ```text
   dfx canister call subscriber getRecord
   ```
