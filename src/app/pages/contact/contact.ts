import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  nome = '';
  telefone = '';
  email = '';
  assunto = '';
  mensagem = '';

  enviando = false;

  constructor() {
    emailjs.init({
      publicKey: 'KOoWwTKURfMZAfA8h',
    });
  }

  scrollToAgendamento(): void {
    const agendamento = document.getElementById('agendamento');

    agendamento?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  formatarTelefone(event: Event): void {
    const input = event.target as HTMLInputElement;

    let numero = input.value.replace(/\D/g, '');

    numero = numero.slice(0, 11);

    if (numero.length <= 2) {
      this.telefone = numero;
    } else if (numero.length <= 6) {
      this.telefone = `(${numero.slice(0, 2)}) ${numero.slice(2)}`;
    } else if (numero.length <= 10) {
      this.telefone = `(${numero.slice(0, 2)}) ${numero.slice(2, 6)}-${numero.slice(6)}`;
    } else {
      this.telefone = `(${numero.slice(0, 2)}) ${numero.slice(2, 7)}-${numero.slice(7)}`;
    }

    input.value = this.telefone;
  }

  submit(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.enviando = true;

    emailjs
      .send('service_lypag0a', 'SEU_TEMPLATE_ID_CORRETO', {
        nome: this.nome,
        telefone: this.telefone,
        email: this.email,
        assunto: this.assunto,
        mensagem: this.mensagem,
      })
      .then(() => {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');

        this.limparFormulario();

        form.resetForm();
      })
      .catch((error: any) => {
        console.error('Erro ao enviar formulário:', error);

        alert(`Erro ${error?.status ?? ''}: ${error?.text ?? 'Não foi possível enviar.'}`);
      })
      .finally(() => {
        this.enviando = false;
      });
  }

  private limparFormulario(): void {
    this.nome = '';
    this.telefone = '';
    this.email = '';
    this.assunto = '';
    this.mensagem = '';
  }
}
