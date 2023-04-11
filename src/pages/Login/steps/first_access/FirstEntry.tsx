export const FirstEntry = ({page, setPage}) => {
  return (
    <div>
      <h1>First Entry</h1>
      <button type="button" onClick={() => {
        setPage(page + 1);
      }}>Próxima Etapa</button>
    </div>
  )
}