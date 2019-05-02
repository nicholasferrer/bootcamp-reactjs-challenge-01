import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: 'Nicholas Ferrer',
        avatar:
          'https://scontent.fgig4-1.fna.fbcdn.net/v/t1.0-1/p160x160/42132039_2164693533543632_169333810108825600_n.jpg?_nc_cat=103&_nc_ht=scontent.fgig4-1.fna&oh=50d51ff9b21bdaf938e3405b08f984c3&oe=5D7832C8',
        createdAt: 'há 9 min',
        content: '"Mas e o Lula? e o PT???"',
      },
      {
        id: 2,
        author: 'Maria Clara David',
        avatar:
          'https://scontent.fgig4-1.fna.fbcdn.net/v/t1.0-1/p160x160/39116701_2219149738095221_7256633708025741312_n.jpg?_nc_cat=108&_nc_ht=scontent.fgig4-1.fna&oh=8c55cae8bceb7dbb9ea20e248cca9808&oe=5D31EC6C',
        createdAt: 'há 14 min',
        content: 'É através da loucura dos poetas que a sociedade respira.',
      },
      {
        id: 3,
        author: 'AdoroCinema',
        avatar:
          'https://scontent.fgig4-1.fna.fbcdn.net/v/t1.0-1/p200x200/57159980_2349088361807651_7203337566223859712_n.png?_nc_cat=1&_nc_ht=scontent.fgig4-1.fna&oh=5616dc19481b30cbb8b16516d5ca4609&oe=5D673AED',
        createdAt: 'há 32 min',
        content:
          'O 3º episódio da última temporada de #GameOfThrones deixou todo mundo tenso e confuso, mas será que vamos conseguir sobreviver ao que está por vir!?? Entenda tudo aqui!',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
