export function SignUp({ setPage }) {
  return (
    <div>
      <h1>Sign Up</h1>
      <button
        type="button"
        onClick={() => {
          setPage("SignIn");
        }}
      >
        Próxima Etapa
      </button>
    </div>
  );
}
