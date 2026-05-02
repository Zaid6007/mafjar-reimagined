import { Navigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut, Package, User as UserIcon } from "lucide-react";

const Account = () => {
  const { user, signOut } = useAuth();
  if (!user) return <Navigate to="/auth" replace />;
  return (
    <section className="py-16">
      <div className="container-tight max-w-3xl">
        <h1 className="text-3xl font-bold text-brand-navy mb-8">My Account</h1>
        <div className="bg-card border border-border rounded-3xl shadow-card p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-brand-navy text-white flex items-center justify-center text-xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="font-semibold text-lg text-brand-navy">{user.name}</div>
              <div className="text-sm text-muted-foreground">{user.email}</div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <Button asChild variant="outline" className="rounded-full justify-start h-12">
              <Link to="/shop"><Package className="w-4 h-4 mr-2" /> Continue shopping</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full justify-start h-12">
              <Link to="/contact"><UserIcon className="w-4 h-4 mr-2" /> Contact support</Link>
            </Button>
          </div>
          <Button onClick={signOut} variant="ghost" className="mt-6 text-destructive hover:text-destructive">
            <LogOut className="w-4 h-4 mr-2" /> Sign out
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Account;
