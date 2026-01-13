'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

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

const CadastroSchema = z
  .object({
    loja: z.string().min(1, 'Informe o nome da loja'),
    responsavel: z.string().min(1, 'Informe o responsável'),
    celular: z.string().min(8, 'Celular inválido'),
    documento: z.string().min(11, 'Documento inválido'),
    tipoNegocio: z.string().min(1, 'Selecione o tipo'),
    email: z.string().email('Email inválido'),
    senha: z.string().min(6, 'Mínimo 6 caracteres'),
    confirmarSenha: z.string(),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: 'As senhas não coincidem',
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

    router.push('/login');
  }

  return (
    <Container>
      <FormSection>
        <Form onSubmit={handleSubmit(handleCadastro)}>
          <Title>Comece a fidelizar seus clientes hoje mesmo</Title>

          <Input>
            <label>Nome da loja</label>
            <input {...register('loja')} />
            {errors.loja && <span>{errors.loja.message}</span>}
          </Input>

          <Input>
            <label>Nome do responsável</label>
            <input {...register('responsavel')} />
            {errors.responsavel && <span>{errors.responsavel.message}</span>}
          </Input>

          <Input>
            <label>Celular</label>
            <input {...register('celular')} />
            {errors.celular && <span>{errors.celular.message}</span>}
          </Input>

          <Input>
            <label>CNPJ / CPF</label>
            <input {...register('documento')} />
            {errors.documento && <span>{errors.documento.message}</span>}
          </Input>

          <Input>
            <label>Tipo de negócio</label>
            <select {...register('tipoNegocio')}>
              <option value="">Selecione</option>
              <option value="restaurante">Restaurante</option>
              <option value="mercado">Mercado</option>
              <option value="loja">Loja</option>
            </select>
            {errors.tipoNegocio && <span>{errors.tipoNegocio.message}</span>}
          </Input>

          <Input>
            <label>Email</label>
            <input type="email" {...register('email')} />
            {errors.email && <span>{errors.email.message}</span>}
          </Input>

          <Input>
            <label>Senha</label>
            <input type="password" {...register('senha')} />
            {errors.senha && <span>{errors.senha.message}</span>}
          </Input>

          <Input>
            <label>Confirme a senha</label>
            <input type="password" {...register('confirmarSenha')} />
            {errors.confirmarSenha && (
              <span>{errors.confirmarSenha.message}</span>
            )}
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
