
import { X } from "lucide-react";

function ContactModal({ showModal, setShowModal }) {
  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#172554]/60 px-5 backdrop-blur-sm"
      onClick={() => setShowModal(false)}
    >
      <div
        className="w-full max-w-md rounded-3xl bg-[#FFFBF5] p-7 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-sm font-semibold text-[#F97360]">
              Get Started
            </span>

            <h3 className="mt-2 text-2xl font-bold">
              Let's build your digital presence.
            </h3>
          </div>

          <button
            onClick={() => setShowModal(false)}
            className="rounded-full p-2 hover:bg-black/5"
          >
            <X size={20} />
          </button>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-6 text-[#172554]/60">
          Tell us a little about your business and the digital service
          you're interested in.
        </p>

        {/* Form */}
        <div className="mt-6 space-y-4">

          <input
            type="text"
            placeholder="Your name"
            className="modal-input"
          />

          <input
            type="text"
            placeholder="Business name"
            className="modal-input"
          />

          <select className="modal-input">
            <option>Select a service</option>
            <option>Website Service</option>
            <option>Google Business Profile</option>
            <option>WhatsApp Business</option>
          </select>

          <button
            onClick={() => {
              alert("Thank you! We will get in touch with you.");
              setShowModal(false);
            }}
            className="w-full rounded-xl bg-[#172554] px-5 py-3.5 font-semibold text-white transition hover:bg-[#24366d]"
          >
            Submit Request
          </button>

        </div>

      </div>
    </div>
  );
}

export default ContactModal;