const posts = [
    {
      titolo: 'Introduzione al giardinaggio',
      contenuto: 'In questo post, esploreremo i fondamenti del giardinaggio...',
      immagine: 'https://example.com/img1.jpg',
      tags: ['giardinaggio', 'piante', 'cura']
    },
    {
      titolo: 'Consigli per la coltivazione di rose',
      contenuto: 'Le rose sono bellissime e richiedono attenzione particolare...',
      immagine: 'https://example.com/img2.jpg',
      tags: ['giardinaggio', 'rose', 'fiori']
    },
    {
      titolo: 'Come affrontare le infestazioni',
      contenuto: 'Scopri i metodi per proteggere il tuo giardino da parassiti...',
      immagine: 'https://example.com/img3.jpg',
      tags: ['disinfestazione', 'parassiti', 'consigli']
    },
    {
      titolo: 'Progettare un giardino sostenibile',
      contenuto: 'Impara a rendere il tuo giardino più ecologico...',
      immagine: 'https://example.com/img4.jpg',
      tags: ['sostenibilità', 'ecologia', 'giardinaggio']
    },
    {
      titolo: 'Piante ideali per l’inverno',
      contenuto: 'Alcune piante possono resistere a temperature fredde...',
      immagine: 'https://example.com/img5.jpg',
      tags: ['inverno', 'piante', 'giardinaggio']
    }
  ];
  
  const index = (req, res) => {
    res.json({
      conteggio: posts.length,
      lista: posts
    });
  };
  
  module.exports = { index };