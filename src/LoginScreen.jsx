import { useState } from "react";
import { useAuth } from "./AuthContext";

export default function LoginScreen() {
  const { login, signup } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");
    if (!email || !pass) return setError("Preencha todos os campos");
    if (!isLogin && !name) return setError("Preencha seu nome");
    if (pass.length < 6) return setError("Senha precisa ter no mínimo 6 caracteres");
    setLoading(true);
    try {
      if (isLogin) {
        await login(email, pass);
      } else {
        await signup(email, pass, name);
      }
    } catch (err) {
      const code = err.code;
      if (code === "auth/user-not-found" || code === "auth/invalid-credential")
        setError("Email ou senha incorretos");
      else if (code === "auth/email-already-in-use")
        setError("Este email já está cadastrado");
      else if (code === "auth/weak-password")
        setError("Senha muito fraca (mínimo 6 caracteres)");
      else if (code === "auth/invalid-email")
        setError("Email inválido");
      else setError("Erro ao entrar. Tente novamente.");
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0b0f19",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'DM Sans', system-ui, sans-serif",
      padding: 20,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      <div style={{
        width: "100%",
        maxWidth: 400,
        animation: "fadeUp 0.5s ease",
      }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            marginBottom: 16,
          }}>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
              <rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/>
              <circle cx="17" cy="14" r="1.5" fill="white"/>
            </svg>
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#f1f5f9", letterSpacing: "-0.03em" }}>
            FluxoCash
          </div>
          <div style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>
            Gestão Financeira Inteligente
          </div>
        </div>

        {/* Card */}
        <div style={{
          background: "#111827",
          border: "1px solid #1e293b",
          borderRadius: 16,
          padding: 28,
        }}>
          <div style={{ fontSize: 18, fontWeight: 600, color: "#f1f5f9", marginBottom: 4 }}>
            {isLogin ? "Entrar" : "Criar conta"}
          </div>
          <div style={{ fontSize: 12, color: "#64748b", marginBottom: 20 }}>
            {isLogin ? "Acesse sua conta" : "Crie sua conta gratuita"}
          </div>

          {error && (
            <div style={{
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.2)",
              borderRadius: 10, padding: "10px 14px",
              fontSize: 12, color: "#ef4444",
              marginBottom: 14,
            }}>
              {error}
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%", padding: "11px 14px",
                  background: "#0d1320", border: "1px solid #1e293b",
                  borderRadius: 10, color: "#f1f5f9", fontSize: 13,
                  outline: "none", transition: "border-color 0.2s",
                }}
                onFocus={(e) => e.target.style.borderColor = "#6366f1"}
                onBlur={(e) => e.target.style.borderColor = "#1e293b"}
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%", padding: "11px 14px",
                background: "#0d1320", border: "1px solid #1e293b",
                borderRadius: 10, color: "#f1f5f9", fontSize: 13,
                outline: "none",
              }}
              onFocus={(e) => e.target.style.borderColor = "#6366f1"}
              onBlur={(e) => e.target.style.borderColor = "#1e293b"}
            />
            <input
              type="password"
              placeholder="Senha"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              style={{
                width: "100%", padding: "11px 14px",
                background: "#0d1320", border: "1px solid #1e293b",
                borderRadius: 10, color: "#f1f5f9", fontSize: 13,
                outline: "none",
              }}
              onFocus={(e) => e.target.style.borderColor = "#6366f1"}
              onBlur={(e) => e.target.style.borderColor = "#1e293b"}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: "100%", padding: "12px",
              background: loading ? "#4f46e5" : "#6366f1",
              color: "white", border: "none", borderRadius: 10,
              fontSize: 14, fontWeight: 600, cursor: loading ? "wait" : "pointer",
              marginTop: 16, transition: "all 0.2s",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Aguarde..." : isLogin ? "Entrar" : "Criar conta"}
          </button>

          <div style={{
            textAlign: "center", marginTop: 16,
            fontSize: 12, color: "#64748b",
          }}>
            {isLogin ? "Não tem conta? " : "Já tem conta? "}
            <span
              onClick={() => { setIsLogin(!isLogin); setError(""); }}
              style={{ color: "#6366f1", cursor: "pointer", fontWeight: 600 }}
            >
              {isLogin ? "Criar conta" : "Entrar"}
            </span>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 20, fontSize: 11, color: "#334155" }}>
          FluxoCash © {new Date().getFullYear()} — Seus dados ficam salvos na nuvem
        </div>
      </div>
    </div>
  );
}
