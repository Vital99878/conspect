import React from 'react'
import { fetchData } from '../withData/characters'
import { withData } from '../withData/withData'
import { CharacterType } from './characters'
import { Table, TableRow } from './Table'

const CharacterInformation:React.FC<CharacterType> = (character) => {
  return (
    <article>
      <header>
        <h1>{character.name}</h1>
      </header>
      <Table>
        <TableRow heading="Alignment" value={character.alignment} />
        <TableRow heading="Intelligence" value={character.intelligence} />
        <TableRow heading="Strength" value={character.strength} />
        <TableRow heading="Speed" value={character.speed} />
        <TableRow heading="Durability" value={character.durability} />
        <TableRow heading="Power" value={character.power} />
        <TableRow heading="Combat" value={character.combat} />
        <TableRow heading="Total" value={character.total} />
      </Table>
    </article>
  )
}

export default CharacterInformation