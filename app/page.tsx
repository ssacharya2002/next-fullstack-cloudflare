import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="max-w-2xl   mx-auto p-10">
      <div className="flex flex-col justify-center gap-3">
        <Input placeholder="This is my input " />
        <Button>Submit</Button>
      </div>

      <div className=" p-5">
        <ul>this is the first message  </ul>
        <ul>this is the second message  </ul>
        <ul>this is the third message  </ul>
        <ul>this is the fourth message  </ul>
      </div>
    </main>
  );
}
