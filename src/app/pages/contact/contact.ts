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

  submit(): void {
    if (!this.nome || !this.telefone || !this.email || !this.assunto || !this.mensagem) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    this.enviando = true;

    emailjs
      .send(
        'service_lypag0a',
        'template_xjzl88m',
        {
          nome: this.nome,
          telefone: this.telefone,
          email: this.email,
          assunto: this.assunto,
          mensagem: this.mensagem,
        },
        {
          publicKey: 'UgyHVSuHokj-lbMjr',
        },
      )
      .then(() => {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');

        this.limparFormulario();
      })
      .catch((error: unknown) => {
        console.error('Erro ao enviar formulário:', error);

        alert(
          'Não foi possível enviar a mensagem. Tente novamente ou entre em contato pelo WhatsApp.',
        );
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
