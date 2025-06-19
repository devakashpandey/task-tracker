import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-4 flex-col items-center mt-7">
      <Button className="primary" size="xs">
        Click Me
      </Button>
      <Button className="destructive" variant="darkYellow">
        Click Me
      </Button>
      <Button className="destructive" variant="secondary">
        Click Me
      </Button>
      <Button className="destructive" variant="muted">
        Click Me
      </Button>
      <Button className="destructive" variant="lightBlue">
        Click Me
      </Button>
      <p className="text-red-400">joe</p>
    </div>
  );
}
