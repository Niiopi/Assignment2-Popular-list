import React, { Component } from 'react'
import Characters from './characters'



class PopularList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberList: [
        {
          id: 1,
          codename: 'Superman',
          name: 'Clark Kent',
          url: 'https://en.wikipedia.org/wiki/Superman',
          vote:0, 
          submitterAvatarUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpmctvline2.files.wordpress.com%2F2018%2F10%2Flex-luthor.jpg%3Fw%3D620%26h%3D420%26crop%3D1&f=1&nofb=1',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png',
        },
        {
          id: 2,
          codename: 'Batman',
          name: 'Bruce Wayne',
          url: 'https://en.wikipedia.org/wiki/Batman',
          vote:0,
          submitterAvatarUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.comicvine.com%2Fuploads%2Foriginal%2F11115%2F111153050%2F3714164-2303157082-joker.jpg&f=1&nofb=1',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/19/Batman_%28circa_2016%29.png',
        },
        {
          id: 3,
          codename: 'Wonder Woman',
          name: 'Diana Prince',
          url: 'https://en.wikipedia.org/wiki/Wonder_Woman',
          vote:0,
          submitterAvatarUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2F1e%2F63%2F52%2F1e63527c8674edbf4e58a922adeb089b.jpg&f=1&nofb=1',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/93/Wonder_Woman.jpg',
        },
        {
          id: 4,
          codename: 'Green Lantern',
          name: 'John Stewart',
          url: 'https://en.wikipedia.org/wiki/John_Stewart_(comics)',
          vote:0,
          submitterAvatarUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fdf%2Fc7%2Ff0%2Fdfc7f0fd08b4acff377da3b454b28d2e.jpg&f=1&nofb=1',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Green_Lantern_%28John_Stewart%29.jpg',
        },
        {
          id: 5,
          codename: 'Zatanna',
          name: 'Zatanna Zatara',
          url: 'https://en.wikipedia.org/wiki/Zatanna',
          vote:0,
          submitterAvatarUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmoviecomicswhoswho.files.wordpress.com%2F2015%2F01%2Ffelixfaustcomics1.png&f=1&nofb=1',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Zatanna_by_Brian_Boland.jpg',
        },
        {
          id: 6,
          codename: 'Vixen',
          name: 'Mari Jiwe McCabe',
          url: 'https://en.wikipedia.org/wiki/Vixen_(comics)',
          vote:0, 
          submitterAvatarUrl: 'https://comicvine1.cbsistatic.com/uploads/scale_small/5/59032/1899927-aku_kwesi.png',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Vixen_%28DC_Comics_character%29.png',
        },
        {
          id: 7,
          codename: 'Captain Marvel',
          name: 'Billy Batson',
          url: 'https://en.wikipedia.org/wiki/Captain_Marvel_(DC_Comics)',
          vote:0,
          submitterAvatarUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.theglobaldispatch.com%2Fwp-content%2Fuploads%2F2015%2F02%2FJustice_League_of_America_Vol_3_7_4_Black_Adam-DC-Comics.jpg&f=1&nofb=1',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F0e%2F19%2F3b%2F0e193b274dd4d51a02ef01d9b8542cd8--hunters-dc-comic.jpg&f=1&nofb=1'
        }
      ]
    }
  }

  voteChange = (idNum) => {
    const newList = this.state.memberList.map(e => {
      if (e.id === parseInt(idNum)) {
        e.vote = e.vote + 1;
      }
      return e;
    })
    newList.sort((a,b)=>{return b.vote-a.vote});
    this.setState({memberList : newList})
  }  


  render() {
    return (
      <div>
        <Characters list={this.state.memberList} voteChange={this.voteChange}/>
        
      </div>
    )
  }
}

export default PopularList
