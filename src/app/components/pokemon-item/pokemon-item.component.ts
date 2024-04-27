import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-item',
  standalone: true,
  imports: [],
  template: `
  <div class="pokemon-card">
    <p>{{ pokemonInfo.name }}</p>
  </div>
  `,
  styleUrl: './pokemon-item.component.css'
})
export class PokemonItemComponent {
  @Input() pokemonInfo!: Pokemon;
}
