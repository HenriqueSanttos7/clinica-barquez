import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

  submit(): void {
    if (!this.nome || !this.telefone || !this.email || !this.assunto || !this.mensagem) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    this.enviando = true;

    emailjs
      .send('service_lypag0a', 'template_6aq3rre', {
        nome: this.nome,
        telefone: this.telefone,
        email: this.email,
        assunto: this.assunto,
        mensagem: this.mensagem,
      })
      .then(() => {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');

        this.limparFormulario();
      })
      .catch((error: any) => {
        console.error('Erro ao enviar formulário:', error);
        console.error('Status:', error?.status);
        console.error('Texto:', error?.text);

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
