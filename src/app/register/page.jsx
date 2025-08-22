"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("");
    setLoading(true);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (res.ok) {
      const loginRes = await signIn("credentials", {
        redirect: true,
        email: form.email,
        password: form.password,
        callbackUrl: "/products",
      });

      if (loginRes?.error) {
        setMsg("Registered but auto-login failed. Please login manually.");
      }
    } else {
      setMsg(data.error || "Error");
    }

    setLoading(false);
  }

  return (
    <main className="max-w-sm mx-auto p-6 border-2 rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Create an account</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          className="w-full border p-2 rounded"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <Button
          className="w-full border p-2 font-semibold rounded-2xl cursor-pointer"
          type="submit"
        >
          {loading ? "Creating..." : "Sign up"}
        </Button>
        <p className="font-semibold text-gray-700">
          Already have an account?{" "}
          <span>
            <Link className="underline" href={"/login"}>
              Login
            </Link>
          </span>
        </p>
      </form>
      {msg && <p className="mt-3 text-sm">{msg}</p>}
    </main>
  );
}
