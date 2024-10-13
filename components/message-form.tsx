"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { addMessageToDatabase } from "@/actions/add-message-to-database";

export default function MessageForm() {
  const [message, setMessage] = useState("");

    
  async function handleAddMessageToDatabase(){
    const response = await addMessageToDatabase(message);

    if(response.ok){
        setMessage("");
    }
  }


  return (
    <div className="flex flex-col justify-center gap-3">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="add a message.."
      />
      <Button onClick={handleAddMessageToDatabase}>Submit</Button>
    </div>
  );
}
