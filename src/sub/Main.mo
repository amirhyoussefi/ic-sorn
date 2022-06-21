// Subscriber

import Publisher "canister:pub";

actor Subscriber {

  type Record = {
    topic : Text;
    value : Text;
  };

  var msg: Text = "msg0";

  public func init(topic0 : Text) {
    Publisher.subscribe({
      topic = topic0;
      callback = updateCount;
    });
  };

  public func updateRecord(record : Record) {
    msg += record.value;
  };

  public query func getRecord() : async Text {
    return msg;
  };
};
