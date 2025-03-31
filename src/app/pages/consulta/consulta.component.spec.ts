import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ConsultaComponent } from './consulta.component';
import { ApiService } from '../../services/api.service';

describe('ConsultaComponent', () => {
  let component: ConsultaComponent;
  let fixture: ComponentFixture<ConsultaComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, ConsultaComponent],
      providers: [ApiService]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call buscar() when button is clicked', () => {
    spyOn(component, 'buscar');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.buscar).toHaveBeenCalled();
  });

  it('should show error when numero is invalid', () => {
    component.numero = null;
    component.buscar();
    fixture.detectChanges();
    const errorElement = fixture.nativeElement.querySelector('.error-message');
    expect(errorElement.textContent).toContain('Por favor, informe um número válido');
  });
});