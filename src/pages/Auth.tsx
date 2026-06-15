import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Anchor } from "lucide-react";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import logo from "@/assets/logo.png";
import logo1 from "@/assets/logo1.png";

const Auth = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  const auth = useAuth();
  const { signIn, signUp } = auth;

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSendOtp = async () => {
    if (!email) {
      toast.error("Please enter email first");
      return;
    }

    try {
      console.log("OTP sent to:", email);
      setOtpSent(true);
      toast.success("OTP sent to email (mock)");
    } catch (err: any) {
      toast.error(err.message || "Failed to send OTP");
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const formEmail = String(data.get("email") || "").trim();
    const password = String(data.get("password") || "");
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const confirmPassword = String(data.get("confirmPassword") || "");

    if (
      !formEmail ||
      !password ||
      (mode === "signup" && (!firstName || !lastName))
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (mode === "signup" && password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      if (mode === "signin") {
        await signIn(formEmail, password);
      } else {
        const fullName = `${firstName} ${lastName}`;
        await signUp(fullName, formEmail, password);
      }

      toast.success(mode === "signin" ? "Welcome back" : "Account created");

      const redirect = searchParams.get("redirect") || "/account";
      navigate(redirect);
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setGoogleLoading(true);
      console.log("Google login clicked");
      toast.success("Google login not implemented yet");
    } catch (err: any) {
      toast.error(err.message || "Google login failed");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center py-16">
      <div className="container-tight max-w-md mx-auto">
        <div className="bg-card border border-border rounded-3xl shadow-elevated p-8">

          {/* Logo */}
          <Link
  to="/"
  className="flex items-center justify-center w-full group"
  aria-label="Mafjar Marine home"
>
  <div className="h-16 w-14 flex items-center justify-center">
    <img
      src={logo}
      alt="Mafjar Logo"
      className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>
</Link>
          {/* Title */}
          <h1 className="text-2xl font-bold text-brand-navy text-center">
            {mode === "signin" ? "Welcome back" : "Create account"}
          </h1>

          <p className="text-sm text-muted-foreground text-center mt-1 mb-6">
            {mode === "signin"
              ? "Sign in to access your account"
              : "Join Mafjar Marine"}
          </p>

          {/* FORM */}
          <form onSubmit={onSubmit} className="space-y-4">

            {mode === "signup" && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>First Name *</Label>
                  <Input name="firstName" required className="rounded-full mt-1.5" />
                </div>

                <div>
                  <Label>Last Name *</Label>
                  <Input name="lastName" required className="rounded-full mt-1.5" />
                </div>
              </div>
            )}

           {/* EMAIL */}
<div>
  <Label>Email *</Label>

  <Input
    name="email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="rounded-full mt-1.5"
  />
</div>

              {/* ONLY SIGNUP: OTP FLOW */}
{mode === "signup" && (
  <>
    <div className="flex gap-2">
      <Button
        type="button"
        className="rounded-full px-4 mt-2"
        onClick={handleSendOtp}
      >
        Send OTP
      </Button>
    </div>

    <div>
      <Label>Email OTP *</Label>
      <Input
        name="emailOtp"
        className="rounded-full mt-1.5"
        placeholder="Enter OTP"
      />
    </div>
  </>
)}

            <div>
              <Label>Password *</Label>
              <Input
                name="password"
                type="password"
                required
                className="rounded-full mt-1.5"
              />
            </div>

            {mode === "signup" && (
              <>
                <div>
                  <Label>Confirm Password *</Label>
                  <Input
                    name="confirmPassword"
                    type="password"
                    required
                    className="rounded-full mt-1.5"
                  />
                </div>

                <div>
                  <Label>Company Name</Label>
                  <Input name="CompanyName" className="rounded-full mt-1.5" />
                </div>
              </>
            )}

            <Button
              type="submit"
              disabled={loading || googleLoading}
              className="w-full bg-brand-red hover:bg-brand-red-hover text-white rounded-full h-12"
            >
              {loading
                ? "Please wait..."
                : mode === "signin"
                ? "Sign In"
                : "Create Account"}
            </Button>
          </form>

          {/* Toggle */}
          <div className="text-center text-sm text-muted-foreground mt-6">
            {mode === "signin" ? (
              <>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className="text-brand-red font-semibold hover:underline"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("signin")}
                  className="text-brand-red font-semibold hover:underline"
                >
                  Sign in
                </button>
              </>
            )}
          </div>

          {/* Google */}
          <Button
            type="button"
            variant="outline"
            disabled={googleLoading || loading}
            className="w-full rounded-full h-12 mt-4 flex items-center justify-center gap-2"
            onClick={handleGoogleLogin}
          >
            <FcGoogle className="text-xl" />
            {googleLoading ? "Connecting..." : "Continue with Google"}
          </Button>

        </div>
      </div>

    </section>
  );
};

export default Auth;