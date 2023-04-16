export function SignUp({ page, setPage }) {
  return (
    <div>
      <h1>Sign Up</h1>
      <button
        type="button"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Próxima Etapa
      </button>
    </div>
  );
}
