import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Card from '@/components/Card';
import Modal from '@/components/Modal';

const toJSON = (_: Response) => _.json();
const getPokemon = () =>
  fetch('https://pokeapi.co/api/v2/pokemon?limit=21').then(toJSON);

const Dashboard = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pokemonId, setPokemonId] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const { isLoading } = useQuery(['pokemon'], getPokemon, {
    onSuccess: async data => {
      setPokemon(
        await Promise.all(
          data.results.map(
            async pokemon => await fetch(pokemon.url).then(toJSON),
          ),
        ),
      );
    },
  });

  const toggleModal = (id: number) => {
    setIsModalOpen(true);
  };

  const pokedex = pokemon.map(poke => (
    <Card
      key={poke.id}
      id={poke.id}
      name={poke.name}
      image={poke.sprites.front_default}
      types={poke.types}
    />
  ));

  return (
    <>
      <div className="container mx-auto px-8">
        <nav className="flex justify-between py-4 border-b-2 items-center">
          <h1 className="text-3xl">Pokemon Next!</h1>
          <button
            className="border-2 border-black rounded-xl px-4 py-2 focus:outline-none font-extrabold shadow-custom bg-yellow-400 hover:bg-yellow-500"
            onClick={() => router.push('/signin')}
          >
            Logout
          </button>
        </nav>
        <div className="grid md:grid-cols-3 gap-4 py-8">
          {isLoading ? 'Loading...' : pokedex}
        </div>
      </div>
      <Modal
        isVisible={isModalOpen}
        onToggle={setIsModalOpen}
        pokemon={pokemon}
        pokemonId={pokemonId}
      />
    </>
  );
};

export default Dashboard;
