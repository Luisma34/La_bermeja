import { useState } from "react";
import { supabase } from "../library/supabaseClient.js";
import { useNavigate } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  return <h1>Forgot password</h1>;
}
export default ForgotPasswordPage;
