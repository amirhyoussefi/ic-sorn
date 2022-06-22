// Subscriber

import Notary "canister:notary";

actor Subscriber {

  type Record = {
    topic : Text;
    value : Nat;
  };

  var record: Nat = 0;

  public func init(topic0 : Text) {
    Notary.subscribe({
      topic = topic0;
      callback = updateRecord;
    });
  };

  public func updateRecord(recorder : Record) {
    record += recorder.value;
  };

  public query func getRecord() : async Nat {
    return record;
  };
};