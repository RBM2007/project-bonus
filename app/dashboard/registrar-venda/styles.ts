import { styled } from "@/app/styles";


/* Página */
export const Page = styled('main', {

  borderRadius: '$lg',
  padding: '$6',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
});

/* Header */
export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
});

export const Title = styled('h1', {
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$gray900',
});

/* Card do formulário */
export const FormCard = styled('div', {
  border: '1px solid $gray100',
  borderRadius: '$lg',
  padding: '$5',
});

/* Grid do formulário */
export const FormGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '$4',
});

/* Campo */
export const Field = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  label: {
    fontSize: '$sm',
    color: '$gray600',
    fontWeight: '$medium',
  },

  variants: {
    disabled: {
      true: {
        opacity: 0.6,
        pointerEvents: 'none',
      },
    },
  },
});

/* Input */
export const Input = styled('input', {
  height: 40,
  padding: '0 $3',
  borderRadius: '$md',
  border: '1px solid $gray300',
  fontSize: '$sm',
  color: '$gray800',
  backgroundColor: '$white',

  '&:focus': {
    outline: 'none',
    borderColor: '$green500',
  },

  '&:disabled': {
    backgroundColor: '$gray100',
    cursor: 'not-allowed',
  },
});

/* Grupo de input + botão */
export const InputGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

/* Botão de busca */
export const SearchButton = styled('button', {
  height: 40,
  width: 40,
  marginLeft: '-1px',
  borderRadius: '0 $md $md 0',
  border: '1px solid $gray300',
  backgroundColor: '$gray100',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  color: '$gray700',

  '&:hover': {
    backgroundColor: '$gray200',
  },
});

/* Card de seção */
export const SectionCard = styled('section', {
  border: '1px solid $gray300',
  borderRadius: '$lg',
  padding: '$5',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

/* Título da seção */
export const SectionTitle = styled('h2', {
  fontSize: '$md',
  fontWeight: '$bold',
  color: '$gray800',
});

/* Rodapé / paginação */
export const FooterPagination = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  span: {
    fontSize: '$xs',
    color: '$gray500',
  },
});

/* Botão de paginação */
export const PaginationButton = styled('button', {
  padding: '$2 $3',
  borderRadius: '$md',
  border: '1px solid $gray300',
  backgroundColor: '$white',
  fontSize: '$sm',
  cursor: 'pointer',
  color: '$gray700',

  '&:hover': {
    backgroundColor: '$gray100',
  },
});
