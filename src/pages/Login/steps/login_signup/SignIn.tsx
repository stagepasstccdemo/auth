export const SignIn = ({page, setPage}) => {
  return (
    <div>
      <h1>Sign In</h1>
      <button type="button" onClick={() => {
        setPage(page + 1);
      }}>Próxima Etapa</button>
    </div>
  )
}