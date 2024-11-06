import { Badge } from "@/components/ui/badge";

export default function Header1() {
  return (
    <div className=" min-h-[30vh] w-full bg-gradient-to-br  from-white to-blue-50/50  py-16  border">
      <div className="container ">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium tracking-wider text-[#6366F1]">
            Case Study
          </p>
          <h1 className="mb-8 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
            Dynamic Title of Case Study Goes Here
          </h1>
          <div className="flex gap-3">
            <Badge variant="secondary" className="rounded-full px-4 py-1">
              TAG1
            </Badge>
            <Badge variant="secondary" className="rounded-full px-4 py-1">
              TAG2
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
