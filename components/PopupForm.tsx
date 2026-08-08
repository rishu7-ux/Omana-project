"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";

export default function PopupForm() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
    };

    let valid = true;

    if (name.trim().length < 3) {
      newErrors.name = "Please enter your full name";
      valid = false;
    }

    if (
      email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      alert("🎉 Thank you! Our team will contact you shortly.");

      setLoading(false);

      setName("");
      setEmail("");
      setPhone("");

      setOpen(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-9999 flex items-center justify-center overflow-y-auto bg-black/50 p-3 sm:p-4"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 16,
              scale: 0.97,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="relative w-full max-w-[95vw] overflow-hidden rounded-2xl bg-linear-to-b from-[#ff8a65] via-[#ff9d6c] to-[#ffb37c] shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:max-w-sm max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-white transition hover:bg-black/20"
            >
              <FaTimes size={13} />
            </button>

            <div className="px-6 pt-8 sm:px-7 sm:pt-9">

              <p className="text-center text-[10px] font-bold uppercase tracking-[3px] text-white/75">
                Limited Time Offer
              </p>

              <h2 className="mt-2 text-center text-xl font-bold leading-snug text-white sm:text-2xl">
                Register &amp; Avail
                <br />
                the Best Offers
              </h2>

              <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <FaPhoneAlt className="text-white" size={12} />
                </span>

                <div>
                  <p className="text-[11px] text-white/70">
                    We promise an instant call back
                  </p>

                  <p className="text-sm font-semibold text-white sm:text-base">
                    +91 92171 04219
                  </p>
                </div>
              </div>

            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-3 bg-white/95 px-6 py-6 sm:px-7 sm:py-7"
            >
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#ff8a65] focus:ring-2 focus:ring-[#ff8a65]/20"
                />

                {errors.name && (
                  <p className="mt-1 text-xs font-medium text-[#c62828]">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#ff8a65] focus:ring-2 focus:ring-[#ff8a65]/20"
                />

                {errors.email && (
                  <p className="mt-1 text-xs font-medium text-[#c62828]">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  placeholder="Mobile Number *"
                  maxLength={10}
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, ""))
                  }
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#ff8a65] focus:ring-2 focus:ring-[#ff8a65]/20"
                />

                {errors.phone && (
                  <p className="mt-1 text-xs font-medium text-[#c62828]">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full rounded-lg bg-[#c62828] py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#b71c1c] disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="4"
                        opacity="0.25"
                      />
                      <path
                        d="M22 12a10 10 0 00-10-10"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>

                    Submitting...
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}