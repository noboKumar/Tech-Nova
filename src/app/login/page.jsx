"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });
    if (res?.ok) {
      // Show SweetAlert for successful login
      await Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: "You have logged in successfully",
        timer: 1500,
        showConfirmButton: false,
      });

      // Redirect after SweetAlert closes
      router.push("/products");
    } else {
      setError("Invalid credentials");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email or password",
      });
    }
  }

  return (
    <main className="max-w-sm mx-auto p-6 border-2 rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Log in with TechNova</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          className="w-full border p-2 rounded"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <Button
          className="w-full border p-2 rounded-2xl font-semibold cursor-pointer"
          type="submit"
        >
          Log in
        </Button>
        <p className="font-semibold text-gray-700">
          Don't have an account?{" "}
          <span>
            <Link className="underline" href={"/register"}>
              Register
            </Link>
          </span>
        </p>
      </form>
      {error && <p className="mt-3 text-sm">{error}</p>}
    </main>
  );
}
