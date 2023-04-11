export const ShowHowSecond = ({setPage, page}) => {
  return (
    <div>
      <h1>ShowHowSecond</h1>
      <button type="button" onClick={() => {
        setPage(page + 1);
      }}>Próxima Etapa</button>
    </div>
  )
}