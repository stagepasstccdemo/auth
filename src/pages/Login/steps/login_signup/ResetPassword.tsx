export function ResetPassword({ page, setPage }) {
  return (
    <div>
      <h1>Reset Password</h1>
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
