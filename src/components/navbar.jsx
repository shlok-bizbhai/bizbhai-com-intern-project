
import {
  Menu,
  X,
  Sparkles,
} from "lucide-react";

function Navbar({
  menuOpen,
  setMenuOpen,
  scrollTo,
  setShowModal,
}) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#172554]/10 bg-[#FFFBF5]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#172554] text-white">
            <Sparkles size={19} />
          </div>

          <span className="text-xl font-bold tracking-tight">
            Biz<span className="text-[#F97360]">BhAI</span>
          </span>
        </button>

        
        <div className="hidden items-center gap-8 md:flex">

          <button
            onClick={() => scrollTo("about")}
            className="nav-link"
          >
            About
          </button>

          <button
            onClick={() => scrollTo("services")}
            className="nav-link"
          >
            Services
          </button>

          <button
            onClick={() => scrollTo("process")}
            className="nav-link"
          >
            Process
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="rounded-full bg-[#172554] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#24366d]"
          >
            Get Started
          </button>

        </div>

       
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 md:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

      
      {menuOpen && (
        <div className="border-t border-[#172554]/10 bg-[#FFFBF5] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">

            <button
              onClick={() => scrollTo("about")}
              className="mobile-nav-link"
            >
              About
            </button>

            <button
              onClick={() => scrollTo("services")}
              className="mobile-nav-link"
            >
              Services
            </button>

            <button
              onClick={() => scrollTo("process")}
              className="mobile-nav-link"
            >
              Process
            </button>

            <button
              onClick={() => {
                setMenuOpen(false);
                setShowModal(true);
              }}
              className="rounded-full bg-[#172554] px-5 py-3 font-semibold text-white"
            >
              Get Started
            </button>

          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;