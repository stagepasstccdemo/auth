export function ShowHowThird({ setPage, page }) {
  return (
    <div>
      <h1>ShowHowThird</h1>
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
