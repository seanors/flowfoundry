"use client";

import { FormEvent, useState } from "react";

const ACCESS_KEY = "c61728aa-ee4c-48d1-9fad-0f207c34c684";

type Status = "idle" | "loading" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Newsletter() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();

    if (!email || !emailPattern.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    const payload = {
      access_key: ACCESS_KEY,
      email,
      subject: "Newsletter signup",
      from_name: "FlowFoundry Newsletter",
      botcheck: String(formData.get("botcheck") || ""),
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
        throw new Error(result.message || "Subscription failed");
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

  return (
    <section id="newsletter" className="px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-forge-black sm:text-3xl">
          Get new workflows weekly
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Practical AI workflows, tool recommendations, and step-by-step guides
          delivered to your inbox every week.
        </p>

        {status === "success" ? (
          <p
            className="mt-8 rounded-xl border border-black/8 bg-white px-6 py-8 text-base leading-relaxed text-forge-black"
            role="status"
            aria-live="polite"
          >
            You&apos;re subscribed — thanks!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 w-full max-w-md"
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

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <div className="min-w-0 flex-1 text-left">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@company.com"
                  disabled={status === "loading"}
                  aria-invalid={status === "error"}
                  aria-describedby={
                    status === "error" ? "newsletter-error" : undefined
                  }
                  className="h-12 w-full rounded-lg border border-black/10 bg-white px-4 text-base text-forge-black placeholder:text-muted-foreground focus:border-forge-blue focus:outline-none focus:ring-2 focus:ring-forge-blue/20 disabled:cursor-not-allowed disabled:opacity-70"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="h-12 rounded-lg bg-brand-gradient px-8 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:shrink-0"
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </button>
            </div>

            {status === "error" && (
              <p
                id="newsletter-error"
                className="mt-4 text-left text-sm text-automation-text"
                role="alert"
              >
                {errorMessage}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}