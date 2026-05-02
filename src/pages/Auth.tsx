import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Anchor } from "lucide-react";
import { toast } from "sonner";

const Auth = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") || "").trim();
    const password = String(data.get("password") || "");
    const name = String(data.get("name") || "").trim();
    if (!email || !password || (mode === "signup" && !name)) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      if (mode === "signin") await signIn(email, password);
      else await signUp(name, email, password);
      toast.success(mode === "signin" ? "Welcome back" : "Account created");
      navigate("/account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center py-16">
      <div className="container-tight max-w-md mx-auto">
        <div className="bg-card border border-border rounded-3xl shadow-elevated p-8">
          <Link to="/" className="flex items-center justify-center gap-2 mb-6">
            <div className="w-11 h-11 rounded-full bg-brand-navy text-white flex items-center justify-center">
              <Anchor className="w-5 h-5" />
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-brand-navy text-center">
            {mode === "signin" ? "Welcome back" : "Create account"}
          </h1>
          <p className="text-sm text-muted-foreground text-center mt-1 mb-6">
            {mode === "signin" ? "Sign in to access your account" : "Join Mafjar Marine"}
          </p>

          <form onSubmit={onSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <Label htmlFor="name">Full name *</Label>
                <Input id="name" name="name" required maxLength={80} className="rounded-full mt-1.5" />
              </div>
            )}
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required maxLength={120} className="rounded-full mt-1.5" />
            </div>
            <div>
              <Label htmlFor="password">Password *</Label>
              <Input id="password" name="password" type="password" required minLength={6} maxLength={120} className="rounded-full mt-1.5" />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-brand-red hover:bg-brand-red-hover text-white rounded-full h-12">
              {loading ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
            </Button>
          </form>

          <div className="text-center text-sm text-muted-foreground mt-6">
            {mode === "signin" ? (
              <>Don't have an account?{" "}
                <button onClick={() => setMode("signup")} className="text-brand-red font-semibold hover:underline">Sign up</button>
              </>
            ) : (
              <>Already have an account?{" "}
                <button onClick={() => setMode("signin")} className="text-brand-red font-semibold hover:underline">Sign in</button>
              </>
            )}
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">
          Demo auth — wire to Xata or your backend later.
        </p>
      </div>
    </section>
  );
};

export default Auth;
