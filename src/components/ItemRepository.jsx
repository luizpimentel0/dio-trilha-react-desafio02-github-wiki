import React from 'react';
import styles from './ItemRepository.module.css';

const ItemRepositorie = ({ handleDelete, repository }) => {
  return (
    <div className={styles.repositoryContainer} key={repository.id}>
      <h3>{repository.name}</h3>
      <p>{repository.full_name}</p>
      <button>
        <a href={repository.html_url} target="_blank">
          Ver repositório
        </a>
      </button>
      <span>|</span>
      <button onClick={() => handleDelete(repository.id)}>Remover</button>
      <hr />
    </div>
  );
};

export default ItemRepositorie;
