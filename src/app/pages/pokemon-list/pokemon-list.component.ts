import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PokemonItemComponent } from '../../components/pokemon-item/pokemon-item.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { PokemonService } from '../../core/services/pokemon.service';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [AsyncPipe, PokemonItemComponent, ErrorMessageComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  private service = inject(PokemonService);
  public errorMessage!: string;
  public pokemonResults$ = this.service?.getPokemonList()
  .pipe(catchError((error: string) => {
    this.errorMessage = error;
    return EMPTY;
  }));

}
