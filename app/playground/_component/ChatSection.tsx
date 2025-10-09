import React, { useState } from "react";
import { Messages } from "../[projectId]/page";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowUpRight } from "lucide-react";

type Props = {
  messages: Messages[];
  onSend: any;
};

const ChatSection = ({ messages, onSend }: Props) => {
  console.log("messsadwd", messages);
  const [input, setInput] = useState<string>();
  const handleSend = () => {
    if (!input?.trim()) return;
    onSend(input);
    setInput("");
  };
  return (
    <div className="w-96 shadow h-[91vh] p-4 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col">
        {messages?.length === 0 ? (
          <p className="text-gray-400 text-center">no Message Found</p>
        ) : (
          messages?.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-2 rounded-lg max-w-[80%]
            ${
              message.role === "user"
                ? "bg-gray-100 text-black"
                : "bg-gray-300 text-black"
            }
            `}
              >
                {message.content}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-3 border-t flex items-center gap-2">
        <textarea
          placeholder="desine your website..."
          value={input}
          className="flex-1 resize-none border rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
          onChange={(event) => setInput(event.target.value)}
        />
        <Button className="" onClick={handleSend}>
          <ArrowUp />
        </Button>
      </div>
    </div>
  );
};

export default ChatSection;
