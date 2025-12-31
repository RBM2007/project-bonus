import { styled } from '@/app/styles';

/* =======================
   PAGE
======================= */
export const PageContainer = styled('main', {
  width: '100%',
  minHeight: '100vh',
  maxWidth: '1280px', // 🔑 evita esticamento torto
  margin: '0 auto',

  padding: '$6',
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  gap: '$5',

  overflowX: 'hidden', // ❌ scroll lateral
});

/* =======================
   HEADER
======================= */
export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

export const Title = styled('h1', {
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$gray900',
});

/* =======================
   FILTERS
======================= */
export const Filters = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$2',
});

export const FilterButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',

  padding: '$2 $3',
  borderRadius: '$md',
  border: '1px solid $gray300',
  backgroundColor: '$white',

  fontSize: '$sm',
  color: '$gray700',
  cursor: 'pointer',

  transition: 'all 0.2s ease',

  '&:hover': {
    backgroundColor: '$gray100',
  },
});


export const TableWrapper = styled('div', {
  width: '100%',
  border: '1px solid $gray300',
  borderRadius: '$lg',
  overflow: 'hidden',
});

export const Table = styled('table', {
  width: '100%',
  tableLayout: 'fixed',
  borderCollapse: 'collapse',
  fontSize: '$sm',

  thead: {
    backgroundColor: '$gray100',
  },

  th: {
    padding: '$2',
    textAlign: 'left',
    fontWeight: '$bold',
    color: '$gray600',
    borderBottom: '1px solid $gray300',

    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  td: {
    padding: '$2',
    color: '$gray700',
    borderBottom: '1px solid $gray300',

    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  'tbody tr:hover': {
    backgroundColor: '$gray100',
  },

  
  'th:nth-child(1), td:nth-child(1)': { width: '8%' },
  'th:nth-child(2), td:nth-child(2)': { width: '10%' },
  'th:nth-child(3), td:nth-child(3)': { width: '10%' },
  'th:nth-child(4), td:nth-child(4)': { width: '14%' },
  'th:nth-child(5), td:nth-child(5)': { width: '12%' },
  'th:nth-child(6), td:nth-child(6)': { width: '10%' },
  'th:nth-child(7), td:nth-child(7)': { width: '10%' },
  'th:nth-child(8), td:nth-child(8)': { width: '8%' },
  'th:nth-child(9), td:nth-child(9)': {
    width: '8%',
    textAlign: 'center',
  },
});

/* =======================
   ACTIONS
======================= */
export const Actions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
});

export const ActionButton = styled('button', {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '$1',
  borderRadius: '$sm',
  cursor: 'pointer',

  color: '$gray600',
  transition: 'all 0.2s ease',

  svg: {
    width: 18,
    height: 18,
  },

  variants: {
    variant: {
      edit: {
        '&:hover': {
          backgroundColor: '$gray200',
          color: '$gray800',
        },
      },
      delete: {
        '&:hover': {
          backgroundColor: '$red100',
          color: '$red600',
        },
      },
    },
  },
});


export const Pagination = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '$3',
  borderTop: '1px solid $gray300',
  backgroundColor: '$white',

  borderBottomLeftRadius: '$lg',
  borderBottomRightRadius: '$lg',

  button: {
    padding: '$2 $3',
    borderRadius: '$md',
    border: '1px solid $gray300',
    backgroundColor: '$white',
    fontSize: '$sm',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$gray200',
    },
  },

  span: {
    fontSize: '$sm',
    color: '$gray500',
  },
});

export const Overlay = styled("div", {
  position: "fixed",
  inset: 0,
  

  display: "grid",
  placeItems: "center", 

  zIndex: 10,
});



export const FilterWrapper = styled('div', {
  position: 'absolute',
  top: '120px',
  left: '$6',
  zIndex: 20,
});

