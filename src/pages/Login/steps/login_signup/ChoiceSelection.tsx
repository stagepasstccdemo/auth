export const ChoiceSelection = ({page, setPage}) => {
  return (
    <div>
      <h1>Choice Selection</h1>
      <button type="button" onClick={() => {
        setPage(page + 1);
      }}>Próxima Etapa</button>
    </div>
  )
}