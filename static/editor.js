export default {
  '@global': {
    body: {
      background: 'red',
      fontFamily: 'sans-serif'
    },
    '& .app': {
      margin: '1rem 4rem'
    },
    '.app .ql-container': {
      borderBottomLeftRadius: '0.5em',
      borderBottomRightRadius: '0.5em',
      background: '#fefcfc'
    },
    '.app .ql-snow.ql-toolbar': {
      display: 'block',
      background: '#eaecec',
      borderTopLeftRadius: '0.5em',
      borderTopRightRadius: '0.5em'
    },
    '.app .ql-bubble .ql-editor': {
      border: '1px solid #ccc',
      borderRadius: '0.5em'
    },
    '.app .ql-editor': {
      minHeight: '18em'
    },
    '.themeSwitcher': {
      marginTop: '0.5em',
      fontSize: 'small'
    }
  }
};
