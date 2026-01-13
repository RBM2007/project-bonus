'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import Atendente from '../assets/atendente.png';
import { LayoutRight } from '../layout/App/Right';

import {
  Button,
  Container,
  Form,
  FormSection,
  Input,
  LoginLink,
  Title,
} from './styles';
import { saveUser } from '../api/auth';

/**
 * 🔎 Validações auxiliares
 */

// Celular brasileiro
const celularRegex = /^(\(?\d{2}\)?\s?)?(9\d{4}[-\s]?\d{4})$/;

const onlyNumbers = (value: string) => value.replace(/\D/g, '');

function isValidCpfCnpj(value: string) {
  const doc = onlyNumbers(value);

  if (doc.length === 11) {
    if (/^(\d)\1+$/.test(doc)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) sum += Number(doc[i]) * (10 - i);
    let check = (sum * 10) % 11;
    if (check === 10) check = 0;
    if (check !== Number(doc[9])) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) sum += Number(doc[i]) * (11 - i);
    check = (sum * 10) % 11;
    if (check === 10) check = 0;

    return check === Number(doc[10]);
  }

  if (doc.length === 14) {
    if (/^(\d)\1+$/.test(doc)) return false;

    const calc = (x: number) => {
      let n = 0;
      let y = x - 7;
      for (let i = x; i >= 1; i--) {
        n += Number(doc[x - i]) * y--;
        if (y < 2) y = 9;
      }
      const r = 11 - (n % 11);
      return r > 9 ? 0 : r;
    };

    return calc(12) === Number(doc[12]) && calc(13) === Number(doc[13]);
  }

  return false;
}

/**
 * 📜 Schema Zod
 */
const CadastroSchema = z
  .object({
    loja: z.string().min(1, 'Informe o nome da loja'),
    responsavel: z.string().min(1, 'Informe o responsável'),

    celular: z
      .string()
      .regex(celularRegex, 'Telefone inválido'),

    documento: z
      .string()
      .refine(isValidCpfCnpj, 'CPF inválido'),

    tipoNegocio: z.string().min(1, 'Selecione o tipo'),

    email: z.email('Email inválido'),

    senha: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),

    confirmarSenha: z.string(),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: 'Senhas não coincidem',
    path: ['confirmarSenha'],
  });

type CadastroForm = z.infer<typeof CadastroSchema>;

export default function Cadastro() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CadastroForm>({
    resolver: zodResolver(CadastroSchema),
  });

  function handleCadastro(data: CadastroForm) {
    saveUser({
      loja: data.loja,
      responsavel: data.responsavel,
      celular: data.celular,
      documento: data.documento,
      tipoNegocio: data.tipoNegocio,
      email: data.email,
      senha: data.senha,
    });

    toast.success('Cadastro realizado com sucesso');

    router.push('/login');
  }

  function handleError() {
    const firstError = Object.values(errors)[0];

    if (firstError?.message) {
      toast.error(firstError.message as string);
    }
  }

  return (
    <Container>
      <FormSection>
        <Form onSubmit={handleSubmit(handleCadastro, handleError)}>
          <Title>Comece a fidelizar seus clientes hoje mesmo</Title>

          <Input>
            <label>Nome da loja</label>
            <input {...register('loja')} />
          </Input>

          <Input>
            <label>Nome do responsável</label>
            <input {...register('responsavel')} />
          </Input>

          <Input>
            <label>Celular</label>
            <input {...register('celular')} />
          </Input>

          <Input>
            <label>CNPJ / CPF</label>
            <input {...register('documento')} />
          </Input>

          <Input>
            <label>Tipo de negócio</label>
            <select {...register('tipoNegocio')}>
              <option value="">Selecione</option>
              <option value="restaurante">Restaurante</option>
              <option value="mercado">Mercado</option>
              <option value="loja">Loja</option>
            </select>
          </Input>

          <Input>
            <label>Email</label>
            <input type="email" {...register('email')} />
          </Input>

          <Input>
            <label>Senha</label>
            <input type="password" {...register('senha')} />
          </Input>

          <Input>
            <label>Confirme a senha</label>
            <input type="password" {...register('confirmarSenha')} />
          </Input>

          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Aguarde...' : 'Cadastre-se'}
          </Button>

          <LoginLink href="/login">Já tenho uma conta</LoginLink>
        </Form>
      </FormSection>

      <LayoutRight image={Atendente} alt="" />
    </Container>
  );
}
