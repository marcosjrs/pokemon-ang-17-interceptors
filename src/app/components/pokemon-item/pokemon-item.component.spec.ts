import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonItemComponent } from './pokemon-item.component';

describe('PokemonItemComponent', () => {
  let component: PokemonItemComponent;
  let fixture: ComponentFixture<PokemonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonItemComponent);
    component = fixture.componentInstance;
    component.pokemonInfo = {
      name: 'pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/25/'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
