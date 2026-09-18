import { Sparkles } from "lucide-react";

function Footer({ scrollTo }) {
  return (
    <footer className="bg-[#172554] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F97360]">
                <Sparkles size={17} />
              </div>

              <span className="text-xl font-bold">
                BizBhAI
              </span>
            </div>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
              Simple digital solutions that help businesses build a
              stronger online presence.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-white/60">

            <button
              onClick={() => scrollTo("about")}
              className="transition hover:text-white"
            >
              About
            </button>

            <button
              onClick={() => scrollTo("services")}
              className="transition hover:text-white"
            >
              Services
            </button>

            <button
              onClick={() => scrollTo("process")}
              className="transition hover:text-white"
            >
              Process
            </button>

          </div>

        </div>

       
      </div>
    </footer>
  );
}

export default Footer;