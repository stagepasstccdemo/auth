export const ShowHowFirst = ({page, setPage}) => {
  return (
    <div>
      <h1>ShowHowFirst</h1>
      <button type="button" onClick={() => {
        setPage(page + 1);
      }}>Próxima Etapa</button>
    </div>
  )
}