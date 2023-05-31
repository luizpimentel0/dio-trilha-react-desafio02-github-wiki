import React from 'react';
import logo from './assets/github-logo.png';
import Input from './components/Input';
import ItemRepository from './components/ItemRepository';
import { Button } from './components/Button';
import { API } from './services/api';

function App() {
  const [currentRepository, setCurrentRepository] = React.useState('');
  const [repositories, setRepositories] = React.useState([]);
  const [error, setError] = React.useState(null);

  const handleSearchRepository = async () => {
    try {
      setError(null);
      const { data } = await API.get(`repos/${currentRepository}`);

      const repositoryAlreadyExists = repositories.find(
        (repository) => repository.id === data.id,
      );

      if (repositoryAlreadyExists) {
        throw new Error('Repositório já existe. Procure um diferente.');
      }

      setRepositories((prev) => [...prev, data]);
      setCurrentRepository('');
    } catch (err) {
      if (err?.response?.status === 404) {
        setError('Repositório não encontrado');
        return;
      } else {
        setError(err.message);
      }
    }
  };

  const handleDeleteRepository = (repositoryId) => {
    const newRepositories = repositories.filter(
      (repository) => repository.id !== repositoryId,
    );

    setRepositories(newRepositories);
  };

  return (
    <div className="container">
      <img src={logo} alt="github logo" />
      <Input
        onChange={({ target }) => setCurrentRepository(target.value)}
        value={currentRepository}
      />
      <Button onClick={handleSearchRepository} />
      {error && (
        <div className="error fadeLeft">
          <p>{error}</p>
          <button onClick={() => setError(null)}>x</button>
        </div>
      )}
      {repositories.length > 0 &&
        repositories.map((repository) => (
          <ItemRepository
            handleDelete={handleDeleteRepository}
            key={Math.random()}
            repository={repository}
          />
        ))}
    </div>
  );
}

export default App;
