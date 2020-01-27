window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      codename: 'Superman',
      name: 'Clark Kent',
      url: 'https://en.wikipedia.org/wiki/Superman',
      votes: generateVoteCount(),
      submitterAvatarUrl: '',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png',
    },
    {
      id: 2,
      codename: 'Batman',
      name: 'Bruce Wayne',
      url: 'https://en.wikipedia.org/wiki/Batman',
      votes: generateVoteCount(),
      submitterAvatarUrl: '',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/19/Batman_%28circa_2016%29.png',
    },
    {
      id: 3,
      codename: 'Wonder Woman',
      name: 'Diana Prince',
      url: 'https://en.wikipedia.org/wiki/Wonder_Woman',
      votes: generateVoteCount(),
      submitterAvatarUrl: '',
      productImageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/93/Wonder_Woman.jpg',
    },
    {
      id: 4,
      codename: 'Green Lantern',
      name: 'john Stewart',
      url: 'https://en.wikipedia.org/wiki/John_Stewart_(comics)',
      votes: generateVoteCount(),
      submitterAvatarUrl: '',
      productImageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Green_Lantern_%28John_Stewart%29.jpg',
    },
    {
      id: 5,
      codename: 'Zatanna',
      name: 'Zatanna Zatara',
      url: 'https://en.wikipedia.org/wiki/Zatanna',
      votes: generateVoteCount(),
      submitterAvatarUrl: '',
      productImageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Zatanna_by_Brian_Boland.jpg',
    },
    {
      id: 6,
      codename: 'Vixen',
      name: 'Mari Jiwe McCabe',
      url: 'https://en.wikipedia.org/wiki/Vixen_(comics)',
      votes: generateVoteCount(),
      submitterAvatarUrl: '',
      productImageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Vixen_%28DC_Comics_character%29.png',
    },
    {
      id: 7,
      codename: 'Captain Marvel',
      name: 'Billy Batson',
      url: 'https://en.wikipedia.org/wiki/Captain_Marvel_(DC_Comics)',
      votes: generateVoteCount(),
      submitterAvatarUrl: '',
      productImageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/82/Shazam_Captain_Marvel.png'
    }
  ];

  return { products: products };
}());
