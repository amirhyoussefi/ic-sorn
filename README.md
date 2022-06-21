## Overview

IC System of Record Notary


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
   dfx canister call sub init '("BTC-PRICE-AT-COINBASE")'
   ```

1. Publish to the `"Apples"` topic.

   ```text
   dfx canister call pub publish '(record { "topic" = "BTC-PRICE-AT-COINBASE"; "value" = "{ts: 1655791699, price: 21000.00}" })'
   ```

1. Receive your subscription.

   ```text
   dfx canister call sub getRecord
   ```
