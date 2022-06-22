// Notary

import Array "mo:base/Array";

actor Publisher {

  type Record = {
    topic : Text;
    value : Nat;
  };

  type Subscriber = {
    topic : Text;
    callback : shared Record -> ();
  };

  var subscribers : [Subscriber] = [];

  public func subscribe(subscriber : Subscriber) {
    subscribers := Array.append<Subscriber>(subscribers, [subscriber]);
  };

  public func publish(record : Record) {
    for (subscriber in subscribers.vals()) {
      if (subscriber.topic == record.topic) {
        subscriber.callback(record);
      };
    };
  };
};