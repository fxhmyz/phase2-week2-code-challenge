import React from "react";
import BotCard from "./BotCard"; 

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots?.map(bot => (
          <BotCard key={bot.id} bot={bot} action={enlistBot} buttonText="Enlist" />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;