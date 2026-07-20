"use client";

import { FormEvent, useState } from "react";

const ACCESS_KEY = "c61728aa-ee4c-48d1-9fad-0f207c34c684";

const subjectOptions = [
  "Workflow idea",
  "General contact",
  "Feedback",
  "Partnership/other",
] as const;

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "mt-2 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-base text-forge-black placeholder:text-muted-foreground focus:border-forge-blue focus:outline-none focus:ring-2 focus:ring-forge-blue/20";

export function SubmitForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      access_key: ACCESS_KEY,
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      botcheck: String(formData.get("botcheck") || ""),
      from_name: "FlowFoundry Submit",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };


      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again in a moment."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-xl border border-black/8 bg-white px-6 py-10 text-center sm:px-10"
        role="status"
        aria-live="polite"
      >
        <h2 className="text-xl font-semibold text-forge-black">
          Thanks — we got your message.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
          If you shared a workflow idea, we&apos;ll review it for the library.
          For everything else, we&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-brand-gradient px-6 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-black/8 bg-white px-6 py-8 sm:px-10 sm:py-10"
      noValidate
    >
      {/* Web3Forms honeypot — leave empty; hide from users */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-forge-black"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-forge-black"
          >
            Email <span className="text-forge-black/50">(required)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
            aria-required="true"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-forge-black"
          >
            What&apos;s this about?
          </label>
          <select
            id="subject"
            name="subject"
            defaultValue="Workflow idea"
            className={fieldClass}
          >
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-forge-black"
          >
            Message <span className="text-forge-black/50">(required)</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Share a workflow idea, ask a question, or tell us what’s on your mind…"
            className={`${fieldClass} resize-y min-h-[9rem]`}
            aria-required="true"
          />
        </div>
      </div>

      {status === "error" && (
        <p
          className="mt-6 rounded-lg bg-automation-bg px-4 py-3 text-sm text-automation-text"
          role="alert"
        >
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-lg bg-brand-gradient px-8 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}