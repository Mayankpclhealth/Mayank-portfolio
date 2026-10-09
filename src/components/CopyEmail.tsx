'use client';

export default function CopyEmail({ email }: { email: string }) {
  const toast = (message: string) =>
    window.dispatchEvent(new CustomEvent('toast', { detail: message }));

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast('Email copied.');
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button className="btn primary magnetic" type="button" onClick={copy}>
      Copy email
    </button>
  );
}
