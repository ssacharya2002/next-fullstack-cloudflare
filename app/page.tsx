import { getMessageFromDatabase } from "@/actions/get-messages-from-database";
import MessageForm from "@/components/message-form";

export const runtime = "edge";

export default async function Home() {
  const messages = await getMessageFromDatabase();

  return (
    <main className="max-w-2xl   mx-auto p-10">
      <MessageForm />

      <div className=" p-5">
        {messages.map((message) => {
          return <ul key={message.id}>{message.message}</ul>;
        })}
      </div>
    </main>
  );
}
