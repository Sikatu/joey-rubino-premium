"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface ContactDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function ContactDrawer({ open, onClose }: ContactDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement as HTMLElement;
      setTimeout(() => closeRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Focus trap
  useEffect(() => {
    if (!open || !drawerRef.current) return;
    const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [open]);

  return (
    <div
      id="contact-drawer"
      className={`fixed inset-0 z-[70] transition-all duration-500 hidden lg:block ${
        open ? "visible" : "invisible"
      }`}
      role="dialog"
      aria-modal={open ? true : undefined}
      aria-label="Contact drawer"
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-ink/20 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        className={`absolute inset-y-0 right-0 w-full max-w-md bg-ivory flex flex-col transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-end px-8 pt-8">
          <button
            ref={closeRef}
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-ink hover:text-stone transition-colors"
            aria-label="Close contact drawer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center px-12">
          <p className="text-eyebrow mb-8">Get in Touch</p>

          <h2 className="text-title mb-12">
            Let&apos;s start with
            <br />a conversation.
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-eyebrow mb-2">Call</p>
              <a
                href="tel:+13234043759"
                className="font-sans text-xl text-ink hover:text-bronze transition-colors"
              >
                323.404.3759
              </a>
            </div>

            <div>
              <p className="text-eyebrow mb-2">Email</p>
              <a
                href="mailto:joeyrubino@gmail.com"
                className="font-sans text-xl text-ink hover:text-bronze transition-colors"
              >
                joeyrubino@gmail.com
              </a>
            </div>
          </div>

          <div className="divider my-10" />

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-sans text-[13px] tracking-[0.1em] uppercase text-ink hover:text-bronze transition-colors group"
            onClick={onClose}
          >
            Start a Private Conversation
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Bottom reassurance */}
        <div className="px-12 pb-10">
          <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-ink/65">
            Private. Personal. No pressure.
          </p>
        </div>
      </div>
    </div>
  );
}
