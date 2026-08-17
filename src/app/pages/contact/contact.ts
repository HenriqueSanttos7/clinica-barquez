import { AfterViewInit, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import emailjs from '@emailjs/browser';

import { environment } from '../../../environments/environment';

type StatusEnvio = 'sucesso' | 'erro' | null;

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements AfterViewInit {
  nome = '';
  telefone = '';
  email = '';
  assunto = '';
  mensagem: string | null = '';
  aceitouPrivacidade = false;

  enviando = false;

  statusEnvio: StatusEnvio = null;
  mensagemStatus = '';

  readonly telefonePattern = '^\\([1-9]\\d\\) \\d{4,5}-\\d{4}$';

  private readonly assuntosValidos = new Set([
    'consulta',
    'informacoes',
    'especialidades',
    'outro',
  ]);

  private rolarParaAgendamento = false;

  constructor(private readonly route: ActivatedRoute) {
    const assuntoParam = this.route.snapshot.queryParamMap.get('assunto');

    if (assuntoParam && this.assuntosValidos.has(assuntoParam)) {
      this.assunto = assuntoParam;
      this.rolarParaAgendamento = true;
    }
  }

  ngAfterViewInit(): void {
    if (this.rolarParaAgendamento) {
      requestAnimationFrame(() => {
        this.scrollToAgendamento();
      });
    }
  }

  scrollToAgendamento(): void {
    document.getElementById('agendamento')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  formatarTelefone(event: Event): void {
    const input = event.target as HTMLInputElement;

    let numero = input.value.replace(/\D/g, '');

    numero = numero.slice(0, 11);

    if (numero.length === 0) {
      this.telefone = '';
    } else if (numero.length <= 2) {
      this.telefone = `(${numero}`;
    } else if (numero.length <= 6) {
      this.telefone = `(${numero.slice(0, 2)}) ${numero.slice(2)}`;
    } else if (numero.length <= 10) {
      this.telefone = `(${numero.slice(0, 2)}) ` + `${numero.slice(2, 6)}-${numero.slice(6)}`;
    } else {
      this.telefone = `(${numero.slice(0, 2)}) ` + `${numero.slice(2, 7)}-${numero.slice(7)}`;
    }

    input.value = this.telefone;

    this.limparStatus();
  }

  submit(form: NgForm): void {
    this.limparStatus();

    if (form.invalid) {
      form.control.markAllAsTouched();

      this.focarPrimeiroCampoInvalido();

      return;
    }

    this.enviando = true;

    emailjs
      .send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          nome: this.nome.trim(),
          telefone: this.telefone,
          email: this.email.trim(),
          assunto: this.assunto,
          mensagem: this.mensagem.trim(),
        },
        {
          publicKey: environment.emailjs.publicKey,
        },
      )
      .then(() => {
        this.statusEnvio = 'sucesso';

        this.mensagemStatus =
          'Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.';

        form.resetForm({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
          privacy: false,
        });

        this.limparFormulario();
      })
      .catch((error: unknown) => {
        console.error('Erro ao enviar formulário:', error);

        this.statusEnvio = 'erro';

        this.mensagemStatus =
          'Não foi possível enviar sua mensagem. Tente novamente ou entre em contato pelo WhatsApp.';
      })
      .finally(() => {
        this.enviando = false;
      });
  }

  private focarPrimeiroCampoInvalido(): void {
    requestAnimationFrame(() => {
      const campo = document.querySelector<HTMLElement>(
        '#contact-form input.ng-invalid, ' +
          '#contact-form select.ng-invalid, ' +
          '#contact-form textarea.ng-invalid',
      );

      if (!campo) {
        return;
      }

      campo.focus();

      campo.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  }

  private limparStatus(): void {
    this.statusEnvio = null;
    this.mensagemStatus = '';
  }

  private limparFormulario(): void {
    this.nome = '';
    this.telefone = '';
    this.email = '';
    this.assunto = '';
    this.mensagem = '';
    this.aceitouPrivacidade = false;
  }
}
