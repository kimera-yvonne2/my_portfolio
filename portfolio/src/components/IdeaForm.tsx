"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Lightbulb } from "lucide-react";
import { personalData } from "@/data/portfolioData";
import Reveal from "@/components/Reveal";

export default function IdeaForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [emailDraftUrl, setEmailDraftUrl] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = "Project idea for Kimera Yvonne";
    const body = [
      `Hi Kimera,`,
      "",
      idea.trim(),
      "",
      name.trim() ? `From: ${name.trim()}` : "",
      email.trim() ? `Reply to: ${email.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setEmailDraftUrl(mailtoUrl);
    window.location.href = mailtoUrl;
  }

  return (
    <Reveal>
    <section id="contact" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20">
      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl shadow-cyan-950/20">
        <div className="border-b border-slate-800 bg-slate-950/70 px-6 py-5 sm:px-8">
          <div className="mb-3 flex items-center gap-2 text-cyan-400">
            <Lightbulb aria-hidden="true" className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Let&apos;s build something</span>
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Let&apos;s talk about your idea</h2>
          <p className="mt-2 text-slate-400">
            Tell me what you have in mind, and I&apos;ll get back to you. You can also email me directly at{" "}
            <a
              href={`mailto:${personalData.email}`}
              className="font-medium text-cyan-300 underline decoration-cyan-500/40 underline-offset-4 hover:text-cyan-200"
            >
              {personalData.email}
            </a>
            .
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="idea-name" className="mb-2 block text-sm font-medium text-slate-200">
                Your name <span className="text-slate-500">(optional)</span>
              </label>
              <input
                id="idea-name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                placeholder="How should I address you?"
              />
            </div>
            <div>
              <label htmlFor="idea-email" className="mb-2 block text-sm font-medium text-slate-200">
                Your email <span className="text-slate-500">(optional)</span>
              </label>
              <input
                id="idea-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="project-idea" className="mb-2 block text-sm font-medium text-slate-200">
              Your idea
            </label>
            <textarea
              id="project-idea"
              name="idea"
              required
              minLength={10}
              rows={5}
              value={idea}
              onChange={(event) => setIdea(event.target.value)}
              className="w-full resize-y rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              placeholder="What would you like me to work on? Share as much or as little as you like."
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-xs leading-relaxed text-slate-500">
              This opens a draft in your email app. Your idea is sent only when you send that email.
            </p>
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Email me your idea <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>

          {emailDraftUrl && (
            <p role="status" className="text-sm text-cyan-300">
              If your email app didn&apos;t open, <a className="underline underline-offset-4" href={emailDraftUrl}>open the draft here</a>.
            </p>
          )}
        </form>
      </div>
    </section>
    </Reveal>
  );
}
