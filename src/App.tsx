import { Title } from "./components/Title/Title";
import { Header } from "./components/Header/Header"
import { Container } from "./components/Container/Container";
import { Button } from "./components/Button/Button";




const genderBooks = [
  'Ação',
  'Aventura',
  'Biografia',
  'Comédia',
  'Drama',
  'Ficção',
]




function App() {
  return (
    <>
      <Header />
      <Container>

        <Title title='What you want read today?' />
        {genderBooks.map(book => (
          <Button title={book} />
        ))}
      </Container>
    </>
  )
}

export default App;
