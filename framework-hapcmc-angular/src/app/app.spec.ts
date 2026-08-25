import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the series hero', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Historietas');
    expect(compiled.querySelector('h1')?.textContent).toContain('Assombradas');
    expect(compiled.querySelectorAll('.character-card')).toHaveLength(17);
  });

  it('should filter characters by category', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.selecionarCategoria('Antagonistas');

    expect(app.personagensFiltrados).toHaveLength(3);
    expect(app.personagensFiltrados[0].nome).toBe('Edmundo');
    expect(app.personagensFiltrados[1].nome).toBe('Bicho-Papão');
    expect(app.personagensFiltrados[2].nome).toBe('Homem-Anta');
  });
});
